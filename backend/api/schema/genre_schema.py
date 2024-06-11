from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from api.model.genre import Genre

class GenreSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Genre
        load_instance = True
