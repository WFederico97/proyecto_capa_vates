from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int = Field(gt=0, lt=90)
    
    class Config:
        schema_extra = {
            'example':{
                'name': 'John Doe',
                'age': 30
            }
        }
