import string

from .utils import get_inverse_by_mod


def encrypt(text, a, b, alphabet=string.ascii_lowercase):
    encrypted = ''

    for letter in text.lower():
        index = alphabet.find(letter)
        if index != - 1:
            c = (a * index + b) % len(alphabet)
            encrypted += alphabet[c]

    return encrypted


def decrypt(encrypted, a, b, alphabet=string.ascii_lowercase):
    decrypted = ''

    m = len(alphabet)

    for letter in encrypted.lower():
        index = alphabet.find(letter)
        p = (get_inverse_by_mod(a, m) * (index - b)) % m
        decrypted += alphabet[p]

    return decrypted
