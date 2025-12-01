COMMAND_NAME = "exit"
ALIASES = ["quit", "exit"]
DESCRIPTION = "Exit the shell"
USAGE = "exit"

from core.theme_engine import theme_header, theme_info, theme_warn, theme_error, theme_reset
from core.logger import log_event


def run(args):
    print(theme_header() + "Vexo: Exiting..." + theme_reset())
    log_event("Session terminated by user")
    exit()

if __name__ == "__main__":
    import sys
    import os
    # Add project root to sys.path to allow imports from core
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    # Initialize theme and logger for standalone run
    from core.theme_engine import init_theme_engine
    from core.logger import init_logger
    init_theme_engine()
    init_logger()
    
    run([])