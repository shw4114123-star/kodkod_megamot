from fastapi import FastAPI
import uvicorn
from routers.routers import router as citi_search 

app = FastAPI()

app.include_router(citi_search)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=3000, reload=True)