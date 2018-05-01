from app.views.hill import create_hill_views
from app.views.affine import create_affine_views
from ..ciphers.hill import encrypt as encrypt_hill, decrypt as decrypt_hill
from ..ciphers.affine import encrypt as encrypt_affine, decrypt as decrypt_affine


def create_views(app):
    create_affine_views(app, encrypt_affine, decrypt_affine)
    create_hill_views(app, encrypt_hill, decrypt_hill)
