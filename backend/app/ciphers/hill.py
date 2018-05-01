import numpy as np
import string

from .utils import get_inverse_matrix_by_mod


def split_into_numeric_chunks(text, chunk_size, alphabet):
    chunks = []

    for i, letter in enumerate(text):
        if not chunks or len(chunks[-1]) == chunk_size:
            chunks.append([])

        index = alphabet.find(letter)
        if index != -1:
            chunks[-1].append(index)

    while len(chunks[-1]) < chunk_size:
        chunks[-1].append(-1)

    return chunks


def encrypt(key_matrix, text, alphabet=string.ascii_lowercase):
    encrypted = ''

    matrix = np.array(key_matrix)

    text = text.lower()
    chunks = split_into_numeric_chunks(text, len(matrix), alphabet)

    for chunk in chunks:
        indexes_matrix = np.hstack(np.dot(matrix, np.vstack(chunk)) % len(alphabet))
        encrypted += ''.join([alphabet[i] for i in indexes_matrix])

    return encrypted


def decrypt(key_matrix, text, alphabet=string.ascii_lowercase):
    decrypted = ''
    matrix = np.array(key_matrix)

    text = text.lower()
    chunks = split_into_numeric_chunks(text, len(matrix), alphabet)

    decryption_matrix = get_inverse_matrix_by_mod(matrix, len(alphabet))
    for chunk in chunks:
        indexes_matrix = np.hstack(decryption_matrix.dot(np.vstack(chunk)) % len(alphabet))
        decrypted += ''.join([alphabet[int(i)] for i in indexes_matrix])

    return decrypted

#
# matrix_ = [[2, 4, 5], [9, 2, 1], [3, 17, 7]]
#
# print(encrypt(matrix_, 'ATTACK AT DAWN'))
# print(decrypt(matrix_, encrypt(matrix_, 'ATTACK AT DAWN')))
