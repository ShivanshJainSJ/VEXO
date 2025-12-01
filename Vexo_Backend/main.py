import time
import psutil
import platform
import os
from colorama import Fore, Style, init
init(autoreset=True)
VEXO_BLUE = Fore.CYAN
VEXO_INFO = Fore.GREEN
VEXO_WARNING = Fore.YELLOW
VEXO_ERROR = Fore.RED
VEXO_RESET = Style.RESET_ALL

def live_monitor():
    try:
        while True:
            os.system('cls')

            print(VEXO_BLUE + "[ VEXO LIVE SYSTEM MONITOR ]" + VEXO_RESET)

            # CPU Total
            cpu_total = psutil.cpu_percent()
            bars_total = "█" * int(cpu_total // 5)
            print(VEXO_INFO + f"CPU TOTAL: {bars_total} {cpu_total}%\n")

            # Per-core
            print(VEXO_BLUE + "[ CPU PER-CORE ]" + VEXO_RESET)
            cpu_per_core = psutil.cpu_percent(percpu=True)
            for i, usage in enumerate(cpu_per_core):
                bars = "█" * int(usage // 5)
                print(VEXO_INFO + f"Core {i}: {bars} {usage}%")
            print()

            # RAM
            ram = psutil.virtual_memory()
            ram_bars = "█" * int(ram.percent // 5)
            print(VEXO_BLUE + "[ RAM ]" + VEXO_RESET)
            print(VEXO_INFO + f"RAM: {ram_bars} {ram.percent}% ({ram.total / (1024**3):.2f} GB)\n")

            # Disk
            disk = psutil.disk_usage('/')
            disk_bars = "█" * int(disk.percent // 5)
            print(VEXO_BLUE + "[ DISK ]" + VEXO_RESET)
            print(VEXO_INFO + f"Disk: {disk_bars} {disk.percent}% ({disk.total / (1024**3):.2f} GB)\n")

            # Temperature
            print(VEXO_BLUE + "[ TEMP ]" + VEXO_RESET)
            try:
                temps = psutil.sensors_temperatures()
                if temps:
                    for name, entries in temps.items():
                        for entry in entries:
                            print(VEXO_INFO + f"{entry.label or name}: {entry.current}°C")
                else:
                    print(VEXO_WARNING + "No sensor data.")
            except:
                print(VEXO_WARNING + "Temp not supported.")

            print("\n" + VEXO_BLUE + "Press CTRL+C to exit monitor..." + VEXO_RESET)
            time.sleep(1)

    except KeyboardInterrupt:
        print(VEXO_WARNING + "\nExiting live monitor...\n")


def system_info():
    print(VEXO_BLUE + "\n[ VEXO SYSTEM INFO ]" + VEXO_RESET)

    # ----------- BASIC SYSTEM INFO -----------
    print(VEXO_INFO + f"System      : {platform.system()}")
    print(VEXO_INFO + f"Version     : {platform.version()}")
    print(VEXO_INFO + f"Release     : {platform.release()}")
    print(VEXO_INFO + f"Processor   : {platform.processor()}")
    print(VEXO_INFO + f"Machine     : {platform.machine()}")
    print(VEXO_INFO + f"Platform    : {platform.platform()}\n")

    # ----------- CPU USAGE & CORES -----------
    print(VEXO_BLUE + "[ CPU USAGE ]" + VEXO_RESET)
    total_cpu = psutil.cpu_percent()
    print(VEXO_INFO + f"Total CPU Usage : {total_cpu}%")

    # Per-core CPU bar graph
    cpu_per_core = psutil.cpu_percent(percpu=True)
    print(VEXO_BLUE + "\n[ CPU PER-CORE USAGE ]" + VEXO_RESET)
    for i, usage in enumerate(cpu_per_core):
        bars = "█" * int(usage // 5)  # 1 bar = 5%
        print(VEXO_INFO + f"Core {i}: {bars} {usage}%")

    print()

    # ----------- CPU TEMPERATURE -----------
    print(VEXO_BLUE + "[ CPU TEMPERATURE ]" + VEXO_RESET)
    try:
        temps = psutil.sensors_temperatures()
        if temps:
            for name, entries in temps.items():
                for entry in entries:
                    print(VEXO_INFO + f"{entry.label or name}: {entry.current}°C")
        else:
            print(VEXO_WARNING + "Temperature sensors not available.")
    except:
        print(VEXO_WARNING + "Temperature readings not supported on this device.")

    print()

    # ----------- RAM USAGE BAR -----------
    print(VEXO_BLUE + "[ RAM USAGE ]" + VEXO_RESET)
    ram = psutil.virtual_memory()
    ram_percent = ram.percent
    ram_bars = "█" * int(ram_percent // 5)
    print(VEXO_INFO + f"RAM: {ram_bars} {ram_percent}%  ({ram.total / (1024**3):.2f} GB Total)\n")

    # ----------- DISK USAGE BAR -----------
    print(VEXO_BLUE + "[ DISK USAGE ]" + VEXO_RESET)
    disk = psutil.disk_usage('/')
    disk_percent = disk.percent
    disk_bars = "█" * int(disk_percent // 5)
    print(VEXO_INFO + f"Disk: {disk_bars} {disk_percent}%  ({disk.total / (1024**3):.2f} GB Total)\n")

    # ----------- BATTERY INFO -----------
    print(VEXO_BLUE + "[ BATTERY ]" + VEXO_RESET)
    try:
        battery = psutil.sensors_battery()
        if battery:
            plugged = "Charging" if battery.power_plugged else "Not Charging"
            print(VEXO_INFO + f"Battery: {battery.percent}% ({plugged})")
        else:
            print(VEXO_WARNING + "Battery info not available (desktop PC?).")
    except:
        print(VEXO_WARNING + "Battery sensors not supported.\n")

    print()

    # ----------- NETWORK STATS -----------
    print(VEXO_BLUE + "[ NETWORK ]" + VEXO_RESET)
    net = psutil.net_io_counters()
    print(VEXO_INFO + f"Bytes Sent     : {net.bytes_sent / (1024 ** 2):.2f} MB")
    print(VEXO_INFO + f"Bytes Received : {net.bytes_recv / (1024 ** 2):.2f} MB")

    print("\n" + VEXO_BLUE + "[ END OF SYSTEM INFO ]\n" + VEXO_RESET)

    print(VEXO_BLUE + "[ GPU INFO ]" + VEXO_RESET)
    gpu_info()


def cmd_help():
    print(VEXO_BLUE + "[ VEXO HELP ]" + VEXO_RESET)
    print(VEXO_INFO + "exit  - exit the system")
    print(VEXO_INFO + "help  - show commands")
    print(VEXO_INFO + "clear - clear the terminal")
    print(VEXO_INFO + "time  - show time")
    print(VEXO_INFO + "date  - show date")
    print(VEXO_INFO + "system - system info")


def cmd_clear():
    print("Vexo: Clearing the chat...")
    os.system('cls')
    time.sleep(2)
    print("Vexo: Chat cleared!")

def cmd_time():
    print(VEXO_BLUE + "Vexo: The time is " + VEXO_INFO + time.strftime("%H:%M:%S"))

def cmd_date():
    print(VEXO_BLUE + "Vexo: The date is " + VEXO_INFO + time.strftime("%d/%m/%Y"))

def cmd_system():
    system_info()
    
def cmd_exit():
    print("Vexo: Goodbye!")
    exit()

def gpu_info():
    print(VEXO_BLUE + "[ GPU INFO ]" + VEXO_RESET)

    # Try NVIDIA first
    try:
        result = os.popen("nvidia-smi --query-gpu=name,temperature.gpu,utilization.gpu,memory.used,memory.total --format=csv,noheader,nounits").read().strip()

        if result:
            name, temp, usage, mem_used, mem_total = result.split(", ")
            usage = int(usage)
            mem_used = int(mem_used)
            mem_total = int(mem_total)

            # GPU usage bar
            bars = "█" * int(usage // 5)

            print(VEXO_INFO + f"GPU Name        : {name}")
            print(VEXO_INFO + f"Temperature     : {temp}°C")
            print(VEXO_INFO + f"Usage           : {bars} {usage}%")
            print(VEXO_INFO + f"VRAM Usage      : {mem_used} MB / {mem_total} MB")
            return

    except:
        pass

    # If NVIDIA not found
    print(VEXO_WARNING + "No NVIDIA GPU detected or nvidia-smi unavailable.")


commands= {
    "exit": cmd_exit,
    "help": cmd_help,
    "clear": cmd_clear,
    "time": cmd_time,
    "date": cmd_date,
    "system": cmd_system,
    "system info": cmd_system,
    "h": cmd_help,
    "q": cmd_exit,
    "t": cmd_time,
    "sys": cmd_system,
    "sysinfo": cmd_system,
    "monitor": live_monitor,
    "m": live_monitor,
    "gpu": gpu_info
}


def thinking(user_input):
    print(VEXO_BLUE + "Vexo: Thinking..." + VEXO_RESET)
    time.sleep(2)
    print(VEXO_INFO + "Vexo: " + user_input + VEXO_RESET)



def main():
    while True:
        user_input = input("You: ").strip().lower()
        if user_input in commands:
            commands[user_input]()
        elif user_input == "":
            print("Vexo: Please enter a valid input!")
        else:
            thinking(user_input)


if __name__ == "__main__":
    main()
