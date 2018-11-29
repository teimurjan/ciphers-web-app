import unittest
from app.ciphers.hill import encrypt, decrypt

class TestHillCipher(unittest.TestCase):
    def test_encrypt(self):
        self.assertEqual(
            encrypt([[2,4,5],[9,2,1],[3,17,7]], 'ATTACK AT DAWN'), 
            'pfogoanpgxfx'
        )

    def test_decrypt(self):
        self.assertEqual(
            decrypt([[2,4,5],[9,2,1],[3,17,7]], 'pfogoanpgxfx'), 
            'attackatdawn'
        )
