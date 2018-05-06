import os
from flask import Flask
from flask_cors import CORS

from app.views import create_views
from .settings import APP_DIR


def create_app():
    app = Flask(__name__, static_folder=os.path.join(APP_DIR, 'static'), static_url_path='/static/')
    CORS(app)
    create_views(app)
    return app
