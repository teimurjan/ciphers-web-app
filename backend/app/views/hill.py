from flask import request, jsonify, Response


def create_hill_views(app, hill_encrypt, hill_decrypt):
    @app.route('/api/hill/encrypt', methods=['POST'])
    def handle_encrypt_hill_request():
        try:
            data = request.get_json()
            matrix = data.get('matrix')
            text = data.get('text')
            if matrix is None or text is None:
                raise Exception()
            encrypted = hill_encrypt(matrix, text)
            return jsonify({'data': encrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')

    @app.route('/api/hill/decrypt', methods=['POST'])
    def handle_decrypt_hill_request():
        try:
            data = request.get_json()
            matrix = data.get('matrix')
            text = data.get('text')
            if matrix is None or text is None:
                raise Exception()
            decrypted = hill_decrypt(matrix, text)
            return jsonify({'data': decrypted})
        except Exception:
            return Response('{"message": "Invalid data"}', status=400, mimetype='application/json')
