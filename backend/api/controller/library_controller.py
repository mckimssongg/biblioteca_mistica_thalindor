from flask import Blueprint, request, jsonify
from api.extensions import db
from api.model.book import Book
from api.model.personal_library import PersonalLibrary
from flask_jwt_extended import jwt_required, get_jwt_identity

library_bp = Blueprint('library', __name__)

@library_bp.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    
    result = []
    for book in books:
        result.append({
            'titulo': book.titulo,
            'autores': [author.nombre for author in book.autores],
            'editorial': book.editorial,
            'fecha_publicacion': book.fecha_publicacion,
            'isbn': book.isbn,
            'numero_paginas': book.numero_paginas,
            'genero': [genre.descripcion for genre in book.generos],
            'idioma': book.idioma
        })
    
    return jsonify(result), 200


@library_bp.route('/personal_library', methods=['GET'])
@jwt_required()
def get_personal_library():
    current_user_id = get_jwt_identity()
    personal_library = PersonalLibrary.query.filter_by(usuario_id=current_user_id).all()
    
    books = []
    for item in personal_library:
        book = Book.query.get(item.libro_id)
        books.append({
            'titulo': book.titulo,
            'autores': [author.nombre for author in book.autores],
            'editorial': book.editorial,
            'fecha_publicacion': book.fecha_publicacion,
            'isbn': book.isbn,
            'numero_paginas': book.numero_paginas,
            'genero': [genre.descripcion for genre in book.generos],
            'idioma': book.idioma,
            'estado_leido': item.estado_leido
        })
    
    return jsonify(books), 200

@library_bp.route('/personal_library', methods=['POST'])
@jwt_required()
def add_to_personal_library():
    current_user_id = get_jwt_identity()
    data = request.get_json()
    libro_id = data['libro_id']
    
    if PersonalLibrary.query.filter_by(usuario_id=current_user_id, libro_id=libro_id).first():
        return jsonify({'message': 'El libro ya está en la biblioteca personal'}), 400
    
    new_entry = PersonalLibrary(usuario_id=current_user_id, libro_id=libro_id)
    db.session.add(new_entry)
    db.session.commit()
    
    return jsonify({'message': 'Libro agregado a la biblioteca personal'}), 201

@library_bp.route('/personal_library/<int:libro_id>', methods=['DELETE'])
@jwt_required()
def remove_from_personal_library(libro_id):
    current_user_id = get_jwt_identity()
    entry = PersonalLibrary.query.filter_by(usuario_id=current_user_id, libro_id=libro_id).first()
    
    if not entry:
        return jsonify({'message': 'El libro no está en la biblioteca personal'}), 404
    
    db.session.delete(entry)
    db.session.commit()
    
    return jsonify({'message': 'Libro eliminado de la biblioteca personal'}), 200

@library_bp.route('/search_books', methods=['GET'])
@jwt_required()
def search_books():
    books = Book.query.paginate(page=request.args.get('page', 1, type=int), per_page=50)
    
    result = []
    for book in books.items:
        result.append({
            'titulo': book.titulo,
            'autores': [author.nombre for author in book.autores],
            'editorial': book.editorial,
            'fecha_publicacion': book.fecha_publicacion,
            'isbn': book.isbn,
            'numero_paginas': book.numero_paginas,
            'genero': [genre.descripcion for genre in book.generos],
            'idioma': book.idioma
        })
    
    return jsonify(result), 200
