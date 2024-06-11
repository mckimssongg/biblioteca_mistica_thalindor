from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from api.model.book import Book
from api.schema.author_schema import AuthorSchema
from api.schema.genre_schema import GenreSchema

class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
    
    autores = AuthorSchema(many=True)
    generos = GenreSchema(many=True)
