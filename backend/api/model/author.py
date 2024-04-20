from api.extensions import db

class Author(db.Model):
    __tablename__ = 'autores'

    autor_id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)

    # Relaciones
    libros = db.relationship('Book', secondary='libros_autores', back_populates='autores')
