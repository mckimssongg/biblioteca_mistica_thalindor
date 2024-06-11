from flask import Flask
from api.config import Config
from api.extensions import db, jwt
from api.controller.auth_controller import auth_bp
from api.controller.library_controller import library_bp

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Inicializar extensiones
    db.init_app(app)
    jwt.init_app(app)

    # Registrar blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(library_bp, url_prefix='/api/library')

    return app
