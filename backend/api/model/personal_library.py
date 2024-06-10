from api.extensions import db

class PersonalLibrary(db.Model):
    __tablename__ = 'biblioteca_personal'
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.usuario_id'), primary_key=True)
    libro_id = db.Column(db.Integer, db.ForeignKey('libros.libro_id'), primary_key=True)
    estado_leido = db.Column(db.Boolean, nullable=False, default=False)
    fecha_agregado = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    # Relaciones
    usuario = db.relationship('User', back_populates='biblioteca_personal')
    libro = db.relationship('Book', back_populates='biblioteca_personal')
