# core/monitor.py
import os
import time
import psutil
from core.theme_engine import theme_header, theme_info, theme_warn, theme_reset
from core.logger import log_event

def live_monitor_loop():
    log_event("Live monitor started")
    try:
        while True:
            os.system('cls' if os.name == 'nt' else 'clear')
            print(theme_header() + "[ VEXO LIVE SYSTEM MONITOR ]" + theme_reset())

            cpu_total = psutil.cpu_percent()
            bars_total = "█" * int(cpu_total // 5)
            print(theme_info() + f"CPU TOTAL: {bars_total} {cpu_total}%\n")

            print(theme_header() + "[ CPU PER-CORE ]" + theme_reset())
            cpu_per_core = psutil.cpu_percent(percpu=True)
            for i, usage in enumerate(cpu_per_core):
                bars = "█" * int(usage // 5)
                print(theme_info() + f"Core {i}: {bars} {usage}%")
            print()

            ram = psutil.virtual_memory()
            ram_bars = "█" * int(ram.percent // 5)
            print(theme_header() + "[ RAM ]" + theme_reset())
            print(theme_info() + f"RAM: {ram_bars} {ram.percent}% ({ram.total / (1024**3):.2f} GB)\n")

            disk = psutil.disk_usage('/')
            disk_bars = "█" * int(disk.percent // 5)
            print(theme_header() + "[ DISK ]" + theme_reset())
            print(theme_info() + f"Disk: {disk_bars} {disk.percent}% ({disk.total / (1024**3):.2f} GB)\n")

            print(theme_header() + "[ TEMP ]" + theme_reset())
            try:
                temps = psutil.sensors_temperatures()
                if temps:
                    for name, entries in temps.items():
                        for entry in entries:
                            print(theme_info() + f"{entry.label or name}: {entry.current}°C")
                else:
                    print(theme_warn() + "No sensor data." + theme_reset())
            except Exception:
                print(theme_warn() + "Temp not supported." + theme_reset())

            print("\n" + theme_header() + "Press CTRL+C to exit monitor..." + theme_reset())
            time.sleep(1)
    except KeyboardInterrupt:
        log_event("Live monitor exited")
        print(theme_warn() + "\nExiting live monitor...\n" + theme_reset())
