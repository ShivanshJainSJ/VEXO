# core/loader.py
import os
import importlib.util
from core.logger import log_event

def load_module_from_path(path):
    name = os.path.splitext(os.path.basename(path))[0]
    spec = importlib.util.spec_from_file_location(f"commands.{name}", path)
    if spec is None:
        return None
    mod = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(mod)
        return mod
    except Exception as e:
        log_event(f"Failed to load command module {name}: {e}")
        return None

def load_commands(commands_folder):
    """
    Scans the commands folder, loads all .py modules (excluding __init__.py),
    and builds a registry mapping command strings and aliases to the module object.
    The module is expected to expose:
      - COMMAND_NAME (str)
      - ALIASES (list of str)
      - run(args) function
    """
    registry = {}  # command_str -> module
    if not os.path.isdir(commands_folder):
        return registry

    for fname in os.listdir(commands_folder):
        if not fname.endswith(".py"):
            continue
        if fname.startswith("_"):
            continue
        path = os.path.join(commands_folder, fname)
        mod = load_module_from_path(path)
        if not mod:
            continue

        # read metadata
        cmd_name = getattr(mod, "COMMAND_NAME", None)
        aliases = getattr(mod, "ALIASES", []) or []
        if not cmd_name or not hasattr(mod, "run"):
            log_event(f"Module {fname} missing COMMAND_NAME or run(). Skipping.")
            continue

        # register main name + aliases
        registry[cmd_name] = mod
        for a in aliases:
            registry[a] = mod

    log_event(f"Loaded {len(set(registry.values()))} command modules, {len(registry)} command entries.")
    return registry
