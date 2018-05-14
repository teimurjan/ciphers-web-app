import json
from flask import request, jsonify, Response
from app.ciphers.utils import FormatException


def create_affine_views(app, affine_encrypt, affine_decrypt):
    @app.route('/api/affine/encrypt', methods=['POST'])
    def handle_encrypt_affine_request():
        try:
            data = request.get_json()
            a = data.get('a')
            b = data.get('b')
            text = data.get('text')
            if a is None or b is None or text is None:
                raise FormatException('Data cannot be empty.')
            encrypted = affine_encrypt(text, a, b)
            return jsonify({'data': encrypted})
        except FormatException as e:
            return Response(json.dumps({'message': e.message}), status=400, mimetype='application/json')            
        except Exception:
            return Response('{"message": "Server error"}', status=500, mimetype='application/json')

    @app.route('/api/affine/decrypt', methods=['POST'])
    def handle_decrypt_affine_request():
        try:
            data = request.get_json()
            a = data.get('a')
            b = data.get('b')
            text = data.get('text')
            if a is None or b is None or text is None:
                raise FormatException('Data cannot be empty.')
            decrypted = affine_decrypt(text, a, b)
            return jsonify({'data': decrypted})
        except FormatException as e:
            return Response(json.dumps({'message': e.message}), status=400, mimetype='application/json')     
        except Exception:
            return Response('{"message": "Server error"}', status=500, mimetype='application/json')
