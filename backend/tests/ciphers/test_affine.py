import unittest
from app.ciphers.affine import encrypt, decrypt

class TestAffineCipher(unittest.TestCase):
    def test_encrypt(self):
        self.assertEqual(
            encrypt('defend the east wall of the castle', 5, 3), 
            'sxcxqsumxxdpujdggvcumxndpugx'
        )

    def test_decrypt(self):
        self.assertEqual(
            decrypt('sxcxqsumxxdpujdggvcumxndpugx', 5, 3), 
            'defendtheeastwallofthecastle'
        )
