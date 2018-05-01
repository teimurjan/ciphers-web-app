# API
Cipher | Relative URL | Payload
------ | ------------ | -------
Affine | /api/affine/encrypt<br><br>/api/affine/decrypt | {"text": "defend the east wall of the castle", "a": 1, "b": 1}<br><br>{"text": "wbgbuwyqbbhtynhkkzgyqbrhtykb", "a": 1, "b": 1}
Hill | /api/hill/encrypt<br><br>/api/hill/decrypt | {"text": "ATTACK AT DAWN", "matrix": [[2,4,5],[9,2,1],[3,17,7]]}<br><br>{"text": "pfogoanpgxfx", "matrix": [[2,4,5],[9,2,1],[3,17,7]]}
