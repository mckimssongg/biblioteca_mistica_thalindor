from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from api.model.user import User
from api.schema.personal_library_schema import PersonalLibrarySchema

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
    
    biblioteca_personal = PersonalLibrarySchema(many=True)
