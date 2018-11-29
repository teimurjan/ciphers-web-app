import unittest
from app.ciphers.caesar import encrypt, decrypt

class TestCaesarCipher(unittest.TestCase):
    def test_encrypt(self):
        self.assertEqual(encrypt('abcdefg', 1), 'bcdefgh')

    def test_decrypt(self):
        self.assertEqual(decrypt('bcdefgh', 1), 'abcdefg')
