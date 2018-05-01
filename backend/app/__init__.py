import os
from flask import Flask

from app.views import create_views
from .settings import APP_DIR


def create_app():
    app = Flask(__name__, static_folder=os.path.join(APP_DIR, 'static'), static_url_path='/static/')
    create_views(app)
    return app
