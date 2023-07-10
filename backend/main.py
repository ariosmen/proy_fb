from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.routes import user
from decouple import config

app = FastAPI()

origin = [
    config('FRONTEND_URL')
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origin,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

app.include_router(user)

@app.get('/')
def get_initial():
    return "Bienvenido a la app"