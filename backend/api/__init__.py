from flask import Flask
from api.extensions import db
from api.config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)

    with app.app_context():
        from api.model import user, book, author, genre, book_author, book_genre, personal_library 
        db.create_all()

    return app