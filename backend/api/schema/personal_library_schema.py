from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from api.model.personal_library import PersonalLibrary
from api.schema.book_schema import BookSchema

class PersonalLibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = PersonalLibrary
        load_instance = True
    
    libro = BookSchema()
