# commands/system.py
COMMAND_NAME = "system"
ALIASES = ["sys", "system info", "sysinfo"]
DESCRIPTION = "Show detailed system information"
USAGE = "system"

import platform, psutil
from core.theme_engine import theme_header, theme_info, theme_warn, theme_reset
from core.logger import log_event
from commands import gpu as gpu_module
# optional helper if you split GPU into core.gpu

def run(args):
    print(theme_header() + "\n[ VEXO SYSTEM INFO ]" + theme_reset())

    print(theme_info() + f"System      : {platform.system()}")
    print(theme_info() + f"Version     : {platform.version()}")
    print(theme_info() + f"Release     : {platform.release()}")
    print(theme_info() + f"Processor   : {platform.processor()}")
    print(theme_info() + f"Machine     : {platform.machine()}")
    print(theme_info() + f"Platform    : {platform.platform()}\n")

    total_cpu = psutil.cpu_percent()
    print(theme_info() + f"Total CPU Usage : {total_cpu}%")

    cpu_per_core = psutil.cpu_percent(percpu=True)
    print(theme_info() + "\n[ CPU PER-CORE USAGE ]")
    for i, usage in enumerate(cpu_per_core):
        bars = "█" * int(usage // 5)
        print(theme_info() + f"Core {i}: {bars} {usage}%")
    print()

    try:
        temps = psutil.sensors_temperatures()
        if temps:
            for name, entries in temps.items():
                for entry in entries:
                    print(theme_info() + f"{entry.label or name}: {entry.current}°C")
        else:
            print(theme_warn() + "Temperature sensors not available.")
    except Exception:
        print(theme_warn() + "Temperature readings not supported on this device.")

    ram = psutil.virtual_memory()
    ram_bars = "█" * int(ram.percent // 5)
    print(theme_info() + f"\nRAM: {ram_bars} {ram.percent}%  ({ram.total / (1024**3):.2f} GB Total)\n")

    disk = psutil.disk_usage('/')
    disk_bars = "█" * int(disk.percent // 5)
    print(theme_info() + f"Disk: {disk_bars} {disk.percent}%  ({disk.total / (1024**3):.2f} GB Total)\n")

    try:
        battery = psutil.sensors_battery()
        if battery:
            plugged = "Charging" if battery.power_plugged else "Not Charging"
            print(theme_info() + f"Battery: {battery.percent}% ({plugged})")
        else:
            print(theme_warn() + "Battery info not available.")
    except Exception:
        print(theme_warn() + "Battery sensors not supported.\n")

    net = psutil.net_io_counters()
    print(theme_info() + f"Bytes Sent     : {net.bytes_sent / (1024 ** 2):.2f} MB")
    print(theme_info() + f"Bytes Received : {net.bytes_recv / (1024 ** 2):.2f} MB\n")

    # GPU: try to load commands/gpu module and call run if exists
    try:
        from commands import gpu as gpu_module
        if hasattr(gpu_module, "run"):
            gpu_module.run([])
    except Exception:
        # ignore if GPU module unavailable
        pass

    log_event("system executed")
