import math

def calculate_permutations(word):
    # Calcula las permutaciones de una palabra con letras repetidas
    total_letters = len(word)
    letter_counts = {}
    
    # Contar la frecuencia de cada letra en la palabra
    for letter in word:
        if letter in letter_counts:
            letter_counts[letter] += 1
        else:
            letter_counts[letter] = 1
    
    # Calcular el factorial de la longitud total de la palabra
    permutations = math.factorial(total_letters)
    
    # Dividir por el factorial de la cantidad de repeticiones de cada letra
    for count in letter_counts.values():
        permutations //= math.factorial(count)
    
    return permutations

word = "leader"
permutations = calculate_permutations(word)
print(f"El número de maneras diferentes de reorganizar la palabra '{word}' es: {permutations}")
