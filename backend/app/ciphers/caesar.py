import string

alphabet = list(string.ascii_lowercase)

def get_shifted_index(letter, padding):
    return (alphabet.index(letter) + padding) % len(alphabet)

def get_lower_shifted_letter(letter, padding):
    return alphabet[get_shifted_index(letter, padding)]

def get_shifted_letter(letter, padding):
    return get_lower_shifted_letter(letter, padding) if letter.islower() else get_lower_shifted_letter(letter.lower(), padding).upper()

def encode_caesar_cipher(text, padding):
    result = []
    for char in text:
        if (char.isalpha()):
            result.append(get_shifted_letter(char, padding))
        else: 
            result.append(char)
    return ''.join(result)

def decode_caesar_cipher(text, padding):
    return encode_caesar_cipher(text, -padding)

def encode_vigenere_cipher(text, keyword, is_encode=True):
    result = []
    keyword_paddings = [alphabet.index(letter) if is_encode else -alphabet.index(letter) for letter in keyword]
    for i in range(len(text)):
        if (text[i].isalpha()):
            result.append(get_shifted_letter(text[i], keyword_paddings[i % len(keyword_paddings)]))
        else: 
            result.append(text[i])
    return ''.join(result)

def decode_vigenere_cipher(text, keyword):
    return encode_vigenere_cipher(text, keyword, False)
