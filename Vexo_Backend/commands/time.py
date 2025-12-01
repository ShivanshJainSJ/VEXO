# commands/time.py
COMMAND_NAME = "time"
ALIASES = ["t"]
DESCRIPTION = "Show current time"
USAGE = "time"

import time
from core.theme_engine import theme_header, theme_info, theme_reset
from core.logger import log_event

def run(args):
    print(theme_header() + "Vexo: The time is " + theme_info() + time.strftime("%H:%M:%S") + theme_reset())
    log_event("time executed")
