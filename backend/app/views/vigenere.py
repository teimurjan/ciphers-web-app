from flask import request, jsonify, Response


def create_vigenere_views(app, vigenere_encrypt, vigenere_decrypt):
    @app.route('/api/vigenere/encrypt', methods=['POST'])
    def handle_encrypt_vigenere_request():
        try:
            data = request.get_json()
            keyword = data.get('keyword')
            text = data.get('text')
            if keyword is None or text is None:
                raise Exception()
            encrypted = vigenere_encrypt(text, keyword)
            return jsonify({'data': encrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')

    @app.route('/api/vigenere/decrypt', methods=['POST'])
    def handle_decrypt_vigenere_request():
        try:
            data = request.get_json()
            keyword = data.get('keyword')
            text = data.get('text')
            if keyword is None or text is None:
                raise Exception()
            decrypted = vigenere_decrypt(text, keyword)
            return jsonify({'data': decrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')
