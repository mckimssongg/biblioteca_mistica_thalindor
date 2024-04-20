from api.extensions import db

class BookAuthor(db.Model):
    __tablename__ = 'libros_autores'
    libro_id = db.Column(db.Integer, db.ForeignKey('libros.libro_id'), primary_key=True)
    autor_id = db.Column(db.Integer, db.ForeignKey('autores.autor_id'), primary_key=True)
