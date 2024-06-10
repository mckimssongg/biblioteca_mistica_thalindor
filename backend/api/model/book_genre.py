from api.extensions import db

class BookGenre(db.Model):
    __tablename__ = 'libros_generos'
    libro_id = db.Column(db.Integer, db.ForeignKey('libros.libro_id'), primary_key=True)
    genero_id = db.Column(db.Integer, db.ForeignKey('generos.genero_id'), primary_key=True)
