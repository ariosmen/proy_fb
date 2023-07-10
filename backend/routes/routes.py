from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import get_db, engine
from models import models
from schemas import schemas
from crud import crud

models.Base.metadata.create_all(engine)

user = APIRouter()

@user.get('/users/{user_id}', response_model=schemas.User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(400, 'El usuario no existe')
    return db_user

@user.get('/users', response_model=list[schemas.User])
def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_users(db, skip, limit)

@user.post('/users', response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_email_user(db, user.email)
    if db_user:
        raise HTTPException(400, "El email existe")
    return crud.create_user(db, user)

@user.put('/users/{user_id}', response_model=schemas.User)
def update_user(user_id: int, user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(400, "El usuario no existe")
    return crud.update_user(db, user_id, user)

@user.delete('/users/{user_id}')
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(400, "El usuario no existe")
    return crud.delete_user(db, user_id)

