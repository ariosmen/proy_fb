from sqlalchemy.orm import Session
from models import models
from schemas import schemas

def get_email_user(db: Session, user_email: str):
    return db.query(models.User).filter(models.User.email == user_email).first()

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def update_user(db: Session, user_id: int, user: schemas.UserCreate):
    update_user = db.query(models.User).filter(models.User.id == user_id)
    update_user.update(user.dict())
    db.commit()
    return db.query(models.User).filter(models.User.id == user_id).first()

def delete_user(db: Session, user_id: int):
    db.query(models.User).filter(models.User.id == user_id).delete()
    db.commit()
    return "El usuario fue eliminado"