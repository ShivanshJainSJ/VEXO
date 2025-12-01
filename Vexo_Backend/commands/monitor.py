# commands/monitor.py
COMMAND_NAME = "monitor"
ALIASES = ["m"]
DESCRIPTION = "Start live system monitor"
USAGE = "monitor"

from core.logger import log_event
from core.monitor import live_monitor_loop

def run(args):
    log_event("monitor command started")
    live_monitor_loop()
    log_event("monitor command stopped")
