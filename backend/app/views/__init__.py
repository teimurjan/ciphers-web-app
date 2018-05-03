from app.views.hill import create_hill_views
from app.views.affine import create_affine_views
from app.views.vigenere import create_vigenere_views
from app.views.caesar import create_caesar_views
from ..ciphers.hill import encrypt as encrypt_hill, decrypt as decrypt_hill
from ..ciphers.affine import encrypt as encrypt_affine, decrypt as decrypt_affine
from ..ciphers.vigenere import encrypt as encrypt_vigenere, decrypt as decrypt_vigenere
from ..ciphers.caesar import encrypt as encrypt_caesar, decrypt as decrypt_caesar


def create_views(app):
    create_affine_views(app, encrypt_affine, decrypt_affine)
    create_hill_views(app, encrypt_hill, decrypt_hill)
    create_caesar_views(app, encrypt_caesar, decrypt_caesar)
    create_vigenere_views(app, encrypt_vigenere, decrypt_vigenere)
