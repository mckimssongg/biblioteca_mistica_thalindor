from flask import Flask
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
api.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@db/library'
db = SQLAlchemy(api)
