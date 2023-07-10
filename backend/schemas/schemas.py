from pydantic import BaseModel

class UserBase(BaseModel):
    nombre: str
    apellido: str
    email: str
    
class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    
    class Config:
        orm_mode = True