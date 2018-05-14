import string
from math import gcd

from .utils import get_inverse_by_mod, FormatException


def encrypt(text, a, b, alphabet=string.ascii_lowercase):
    if gcd(a, b) > 1:
        raise FormatException('a and b must be coprimes.')

    encrypted = ''
    for letter in text.lower():
        index = alphabet.find(letter)
        if index != - 1:
            c = (a * index + b) % len(alphabet)
            encrypted += alphabet[c]

    return encrypted


def decrypt(encrypted, a, b, alphabet=string.ascii_lowercase):
    if gcd(a, b) > 1:
        raise FormatException('a and b must be coprimes.')

    decrypted = ''
    m = len(alphabet)

    for letter in encrypted.lower():
        index = alphabet.find(letter)
        p = (get_inverse_by_mod(a, m) * (index - b)) % m
        decrypted += alphabet[p]

    return decrypted
