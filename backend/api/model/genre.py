from api.extensions import db

class Genre(db.Model):
    __tablename__ = 'generos'

    genero_id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(255), nullable=False)

    # Relaciones
    libros = db.relationship('Book', secondary='libros_generos', back_populates='generos')
