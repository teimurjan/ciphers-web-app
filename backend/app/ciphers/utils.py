import numpy as np


def egcd(a, b):
    if a == 0:
        return b, 0, 1
    else:
        g, y, x = egcd(b % a, a)
        return g, x - (b // a) * y, y


def get_inverse_by_mod(a, m):
    g, x, y = egcd(a, m)
    return None if g != 1 else x % m


def get_inverse_matrix_by_mod(matrix, p):
    n = len(matrix)
    matrix = np.matrix(matrix)
    adj = np.zeros(shape=(n, n))
    for i in range(0, n):
        for j in range(0, n):
            adj[i][j] = ((-1) ** (i + j) * int(round(np.linalg.det(get_minor_matrix(matrix, j, i))))) % p
    return (get_inverse_by_mod(int(round(np.linalg.det(matrix))), p) * adj) % p


def get_minor_matrix(matrix, i, j):
    matrix = np.array(matrix)
    minor = np.zeros(shape=(len(matrix) - 1, len(matrix) - 1))
    p = 0
    for s in range(0, len(minor)):
        if p == i:
            p = p + 1
        q = 0
        for t in range(0, len(minor)):
            if q == j:
                q = q + 1
            minor[s][t] = matrix[p][q]
            q = q + 1
        p = p + 1
    return minor
