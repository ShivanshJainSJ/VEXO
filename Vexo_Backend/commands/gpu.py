# commands/gpu.py
COMMAND_NAME = "gpu"
ALIASES = []
DESCRIPTION = "Show GPU info (NVIDIA via nvidia-smi)"
USAGE = "gpu"

from core.theme_engine import theme_header, theme_info, theme_warn, theme_reset
from core.logger import log_event
import os

def run(args):
    print(theme_header() + "[ GPU INFO ]" + theme_reset())
    try:
        result = os.popen("nvidia-smi --query-gpu=name,temperature.gpu,utilization.gpu,memory.used,memory.total --format=csv,noheader,nounits").read().strip()
        if result:
            name, temp, usage, mem_used, mem_total = result.split(", ")
            usage = int(float(usage))
            mem_used = int(float(mem_used))
            mem_total = int(float(mem_total))
            bars = "█" * int(usage // 5)
            print(theme_info() + f"GPU Name        : {name}")
            print(theme_info() + f"Temperature     : {temp}°C")
            print(theme_info() + f"Usage           : {bars} {usage}%")
            print(theme_info() + f"VRAM Usage      : {mem_used} MB / {mem_total} MB")
            log_event("gpu executed (nvidia-smi)")
            return
    except Exception:
        pass
    print(theme_warn() + "No NVIDIA GPU detected or nvidia-smi unavailable." + theme_reset())
    log_event("gpu executed (no nvidia)")
