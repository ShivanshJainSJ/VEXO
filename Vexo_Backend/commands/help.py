# commands/help.py
COMMAND_NAME = "help"
ALIASES = ["h"]
DESCRIPTION = "Show available commands"
USAGE = "help"

from core.theme_engine import theme_header, theme_info, theme_reset
from core.loader import load_commands  # not strictly needed but left for future
from core.logger import log_event

def run(args):
    # Note: We can list modules from loader at runtime if needed.
    print(theme_header() + "[ VEXO HELP ]" + theme_reset())
    print(theme_info() + "exit  - exit the system")
    print(theme_info() + "help  - show commands")
    print(theme_info() + "clear - clear the terminal")
    print(theme_info() + "time  - show time")
    print(theme_info() + "date  - show date")
    print(theme_info() + "system - show system info")
    print(theme_info() + "gpu   - show GPU info")
    print(theme_info() + "monitor - live system monitor")
    log_event("Displayed help")
