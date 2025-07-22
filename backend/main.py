from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import api
from .config import settings

app = FastAPI(title="Threat Modeller API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api.router)

