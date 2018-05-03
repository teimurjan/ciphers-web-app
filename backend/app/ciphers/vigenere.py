import string

from app.ciphers.utils import get_shifted_letter


def encrypt(text, keyword, alphabet=string.ascii_lowercase, is_encode=True):
    result = []
    keyword_paddings = [alphabet.index(letter) if is_encode else -alphabet.index(letter) for letter in keyword]
    for i in range(len(text)):
        if text[i].isalpha():
            result.append(get_shifted_letter(text[i], keyword_paddings[i % len(keyword_paddings)], alphabet))
        else:
            result.append(text[i])
    return ''.join(result)


def decrypt(text, keyword, alphabet=string.ascii_lowercase):
    return encrypt(text, keyword, alphabet, is_encode=False)