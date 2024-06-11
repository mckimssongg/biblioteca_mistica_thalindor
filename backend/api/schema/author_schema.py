from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from api.model.author import Author

class AuthorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Author
        load_instance = True
