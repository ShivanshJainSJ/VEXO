from colorama import Fore, Style, init
init(autoreset=True)

THEMES = {
    "blue": {
        "header": Fore.CYAN,
        "info": Fore.GREEN,
        "warn": Fore.YELLOW,
        "error": Fore.RED
    },
    "neon": {
        "header": Fore.MAGENTA,
        "info": Fore.LIGHTGREEN_EX,
        "warn": Fore.LIGHTYELLOW_EX,
        "error": Fore.LIGHTRED_EX
    },
    "hacker": {
        "header": Fore.GREEN,
        "info": Fore.GREEN,
        "warn": Fore.WHITE,
        "error": Fore.RED
    },
    "ocean": {
        "header": Fore.BLUE,
        "info": Fore.CYAN,
        "warn": Fore.LIGHTBLUE_EX,
        "error": Fore.RED
    },
    "sunset": {
        "header": Fore.LIGHTRED_EX,
        "info": Fore.LIGHTMAGENTA_EX,
        "warn": Fore.YELLOW,
        "error": Fore.RED
    },
    "matrix": {
        "header": Fore.GREEN,
        "info": Fore.LIGHTGREEN_EX,
        "warn": Fore.YELLOW,
        "error": Fore.RED
    },
}

_current_theme = THEMES["blue"]

def init_theme_engine(default="blue"):
    """Initializes the theme system."""
    global _current_theme
    _current_theme = THEMES.get(default, THEMES["blue"])

def set_theme(name):
    """Set active theme"""
    global _current_theme
    if name in THEMES:
        _current_theme = THEMES[name]
        return True
    return False

def theme_header(): return _current_theme["header"]
def theme_info(): return _current_theme["info"]
def theme_warn(): return _current_theme["warn"]
def theme_error(): return _current_theme["error"]
def theme_reset(): return Style.RESET_ALL
