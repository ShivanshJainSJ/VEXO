# commands/date.py
COMMAND_NAME = "date"
ALIASES = []
DESCRIPTION = "Show current date"
USAGE = "date"

import time
from core.theme_engine import theme_header, theme_info, theme_reset
from core.logger import log_event

def run(args):
    print(theme_header() + "Vexo: The date is " + theme_info() + time.strftime("%d/%m/%Y") + theme_reset())
    log_event("date executed")
