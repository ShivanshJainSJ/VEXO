# core/router.py
from core.logger import log_event

class Router:
    def __init__(self, registry):
        """
        registry: dict mapping command string (possibly multi-word) -> module
        module must have run(args_list) function
        """
        self.registry = registry
        # prepare keys ordered by length desc so multi-word keys match first
        self._sorted_keys = sorted(self.registry.keys(), key=lambda k: -len(k))

    def match_and_execute(self, user_input):
        """
        Tries to match the longest command key. If matched, calls module.run(args_list)
        Returns True if a command executed, False otherwise.
        """
        ui = user_input.strip()
        for key in self._sorted_keys:
            if ui == key:
                mod = self.registry[key]
                log_event(f"Command executed: {key}")
                try:
                    mod.run([])
                except Exception as e:
                    log_event(f"Error executing {key}: {e}")
                return True
            if ui.startswith(key + " "):
                args_str = ui[len(key):].strip()
                args = args_str.split()
                mod = self.registry[key]
                log_event(f"Command executed: {key} args: {args_str}")
                try:
                    mod.run(args)
                except Exception as e:
                    log_event(f"Error executing {key}: {e}")
                return True
        return False
