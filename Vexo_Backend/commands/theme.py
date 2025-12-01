# commands/theme.py
COMMAND_NAME = "theme"
ALIASES = []
DESCRIPTION = "Theme utilities (use 'set theme <name>')"
USAGE = "set theme <name>"

from core.theme_engine import set_theme, theme_header, theme_reset, theme_info
from core.logger import log_event

def run(args):
    # if user typed "theme" alone it may land here with args empty;
    # we expect using 'set theme <name>' handled in main, but support fallback:
    if not args:
        print(theme_header() + "Available themes: blue, neon, hacker, ocean, sunset, matrix" + theme_reset())
        return
    theme_name = args[0]
    if set_theme(theme_name):
        print(theme_header() + f"Theme changed to: {theme_name}" + theme_reset())
        log_event(f"Theme changed to {theme_name}")
    else:
        print(theme_info() + "Invalid theme name. Use 'set theme <name>'" + theme_reset())
