from sqlalchemy import Column, String, Integer
from database.db import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    nombre = Column(String(50))
    apellido = Column(String(50))
    email = Column(String(100), unique=True)
    