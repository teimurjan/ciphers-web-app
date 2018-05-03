from flask import request, jsonify, Response


def create_caesar_views(app, caesar_encrypt, caesar_decrypt):
    @app.route('/api/caesar/encrypt', methods=['POST'])
    def handle_encrypt_caesar_request():
        try:
            data = request.get_json()
            padding = data.get('padding')
            text = data.get('text')
            if padding is None or text is None:
                raise Exception()
            encrypted = caesar_encrypt(text, padding)
            return jsonify({'data': encrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')

    @app.route('/api/caesar/decrypt', methods=['POST'])
    def handle_decrypt_caesar_request():
        try:
            data = request.get_json()
            padding = data.get('padding')
            text = data.get('text')
            if padding is None or text is None:
                raise Exception()
            decrypted = caesar_decrypt(text, padding)
            return jsonify({'data': decrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')
