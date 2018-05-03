import string

from app.ciphers.utils import get_shifted_letter


def encrypt(text, padding, alphabet=string.ascii_lowercase):
    result = []
    for char in text:
        if char.isalpha():
            result.append(get_shifted_letter(char, padding, alphabet))
        else:
            result.append(char)
    return ''.join(result)


def decrypt(text, padding, alphabet=string.ascii_lowercase):
    return encrypt(text, -padding, alphabet)
