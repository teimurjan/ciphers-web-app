# ciphers-web-app
This is a web application built with Python(Flask) and JavaScript(React) which implements all of the following ciphers:
 * [Caesar](http://practicalcryptography.com/ciphers/classical-era/caesar/)
 * [Affine](http://practicalcryptography.com/ciphers/classical-era/affine/)
 * [Vigenere](http://practicalcryptography.com/ciphers/classical-era/hill/)
 * [Hill](http://practicalcryptography.com/ciphers/classical-era/vigenere-gronsfeld-and-autokey/)

## Backend
 * Development
 '''sh
 cd backend
 python3 -m venv venv
 source venv/bin/activate
 pip install -r requirements.txt
 python manage.py runserver
 '''