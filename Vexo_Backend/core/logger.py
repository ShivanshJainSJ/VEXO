# core/logger.py
import os
from datetime import datetime

LOG_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "logs")
LOG_FILE = os.path.join(LOG_DIR, "vexo_log.txt")

def init_logger():
    os.makedirs(LOG_DIR, exist_ok=True)
    # ensure file exists
    open(LOG_FILE, "a").close()

def log_event(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(f"[{timestamp}] {message}\n")
    except Exception:
        # avoid raising logging errors in production; fallback to stdout
        print(f"[{timestamp}] {message}")
