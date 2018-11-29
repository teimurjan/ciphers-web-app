import unittest
from app.ciphers.vigenere import encrypt, decrypt

class TestVigenereCipher(unittest.TestCase):
    def test_encrypt(self):
        self.assertEqual(
            encrypt('defend the east wall of the castle', 'haha'), 
            'kemeud toe ehsa dasl om ahl jaztse'
        )

    def test_decrypt(self):
        self.assertEqual(
            decrypt('kemeud toe ehsa dasl om ahl jaztse', 'haha'), 
            'defend the east wall of the castle'
        )
