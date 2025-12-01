# main.py
import os
import sys
from core.loader import load_commands
from core.router import Router
from core.theme_engine import init_theme_engine, theme_header, theme_info, theme_warn, theme_error
from core.logger import init_logger, log_event

# ensure project root on sys.path so core/ and commands/ import works when run from project root
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

def thinking(user_input):
    log_event(f"Thinking response to: {user_input}")
    print(theme_header() + "Vexo: Thinking..." + Style.RESET_ALL)
    import time
    time.sleep(2)
    print(theme_info() + "Vexo: " + user_input + Style.RESET_ALL)

def main():
    # init engines
    init_theme_engine()       # sets up default theme
    init_logger()             # ensures logs folder + file
    # load modules (returns dict: command_string -> module)
    registry = load_commands(os.path.join(PROJECT_ROOT, "commands"))
    router = Router(registry)

    print(theme_header() + "VEXO v5 — Modular Shell" + Style.RESET_ALL)
    while True:
        try:
            user_input = input("You: ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            print()
            log_event("Session terminated by user")
            break

        if not user_input:
            print(theme_warn() + "Vexo: Please enter a valid input!" + Style.RESET_ALL)
            continue

        # special-case: set theme command (multi-word)
        if user_input.startswith("set theme"):
            theme_name = user_input.replace("set theme", "").strip()
            from commands import theme as theme_mod
            theme_mod.run([theme_name])
            continue

        # route command
        matched = router.match_and_execute(user_input)
        if not matched:
            thinking(user_input)

if __name__ == "__main__":
    from colorama import Style  # used in thinking()
    main()
