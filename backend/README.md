# How to run

## App
```sh
python3 -m venv virtualenv
source virtualenv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

## Tests
```sh
python manage.py test
```

# API
| Cipher   | Request                                                      | Payload                                                                                                                                                     |
| -------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affine   | POST /api/affine/encrypt<br><br>POST /api/affine/decrypt     | {"text": "defend the east wall of the castle", "a": 1, "b": 1}<br><br>{"text": "efgfoeuiffbtuxbmmpguifdbtumf", "a": 1, "b": 1}                              |
| Hill     | POST /api/hill/encrypt<br><br>POST /api/hill/decrypt         | {"text": "ATTACK AT DAWN", "matrix": [[2,4,5],[9,2,1],[3,17,7]]}<br><br>{"text": "pfogoanpgxfx", "matrix": [[2,4,5],[9,2,1],[3,17,7]]}                      |
| Caesar   | POST /api/caesar/encrypt<br><br>POST /api/caesar/decrypt     | {"text": "defend the east wall of the castle", "padding": 1}<br><br>{"text": "efgfoe uif fbtu xbmm pg uif dbtumf", "padding": 1}                            |
| Vigenere | POST /api/vigenere/encrypt<br><br>POST /api/vigenere/decrypt | {"text": "defend the east wall of the castle","keyword": "fortification"}<br><br>{"text": "iswxvi vhx snxh piqt oy huj ttaytg", "keyword": "fortification"} |
