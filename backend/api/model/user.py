from api.extensions import db

class User(db.Model):
    __tablename__ = 'usuarios'

    usuario_id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    correo_electronico = db.Column(db.String(255), unique=True, nullable=False)
    contrasena_hash = db.Column(db.String(255), nullable=False)

    # Relaciones
    biblioteca_personal = db.relationship('PersonalLibrary', back_populates='usuario')
