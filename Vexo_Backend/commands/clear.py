# commands/clear.py
COMMAND_NAME = "clear"
ALIASES = []
DESCRIPTION = "Clear terminal"
USAGE = "clear"

import os, time
from core.theme_engine import theme_header, theme_info, theme_reset
from core.logger import log_event

def run(args):
    print(theme_header() + "VEXO: Clearing the chat..." + theme_reset())
    os.system('cls' if os.name == 'nt' else 'clear')
    time.sleep(0.5)
    print(theme_info() + "VEXO: Chat cleared!" + theme_reset())
    log_event("clear executed")
