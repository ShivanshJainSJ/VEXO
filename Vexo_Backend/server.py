# server.py (The VEXO API)
from fastapi import FastAPI
from commands import system # Import your refactored module

app = FastAPI()

@app.get("/")
def root():
    return {"status": "online", "system": "VEXO v3 REST API"}

@app.get("/system")
def api_system_info():
    # This calls the LOGIC function, not the PRINT function
    return system.get_system_data()

if __name__ == "__main__":
    import uvicorn
    # Host 0.0.0.0 allows access from other devices, Port 8000 is standard
    uvicorn.run(app, host="127.0.0.1", port=8000)