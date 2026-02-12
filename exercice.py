
def fizzBuzz(start,nbRepet):
    for i in range(nbRepet): #while true avec i += 1 dans la boucle si on veut une boucle infinie
        string = ""
        if i != 0 and i%3 == 0:
            string += "Fizz"
        if i != 0 and i%5 == 0:
            string += "Buzz"
        if i%3 !=0 and i%5 != 0 :
            string += str(i+start)
        print(string)

def palindromeChecker(string):
    i = 0
    j = len(string)-1
    #on commence avec des indices au début et à la fin
    palindrome = string[i].lower() == string[j].lower()
    while i > j and palindrome:
        lettre = False
        i+= 1
        j -= 1
        while i > j and not lettre:
            #on fait une deuxième boucle pour que les indices ne mènent qu'à des lettres, sinon, l'exemple 3 ne marche pas
            #.isalpha pour vérifier que la caractère est une lettre
            if (not string[i].isalpha()):
                i += 1
            if (not string[j].isalpha()):
                j -= 1
            elif string[i].isalpha() and string[j].isalpha():
                lettre = True
        #on utilise .lower pour ne pas prendre en compte la casse
        if string[i].lower() != string[j].lower():
            palindrome = False
    return palindrome

def triRapide(liste):
    if len(liste) <= 1 :
        #comme dit dans l'énoncé, une liste de 1 élément est déjà triée
        return liste
    else :
        pivot = liste[0]
        listeG = []
        listeD = []
        #on répartit dans les listes les éléments en fonction de leur valeur comparée au pivot
        for hell in liste[1:]:# :)
            if hell <= pivot :
                listeG.append(hell)
            else :
                listeD.append(hell)
        #on construit récursivement le tableau avec l'algo du tri rapide
        return triRapide(listeG)+[pivot]+triRapide(listeD)
        

"""start = int(input("saisir le début :"))
nbRepet = int(input("saisir le nombre de répétition :"))"""
start = 0
nbRepet = 17
fizzBuzz(start, nbRepet) 

print("kayak : "+str(palindromeChecker("kayak")))
print("abba : "+str(palindromeChecker("abba")))
print("A man, a plan, a canal: Panama : "+str(palindromeChecker("A man, a plan, a canal: Panama")))
print("tims : "+str(palindromeChecker("tims")))
print("abab : "+str(palindromeChecker("abab")))

print("radar : "+str(palindromeChecker("radar")))
print("Level : "+str(palindromeChecker("Level")))
print("No lemon, no melon : "+str(palindromeChecker("No lemon, no melon")))
print("Was it a car or a cat I saw : "+str(palindromeChecker("Was it a car or a cat I saw")))
print("bonjour : "+str(palindromeChecker("bonjour")))
print("python : "+str(palindromeChecker("python")))
print("palindrome : "+str(palindromeChecker("palindrome")))

print(triRapide([42, 7, 19, 3, 88, 25, 61, 14, 9, 73, 30, 2, 55, 18, 90, 11, 47, 6, 28, 39]))
print(triRapide([42, 7, 19, 3, 88, 25, 1]))
print(triRapide([100, -5, 23, 0, 67, 2, 89]))
print(triRapide([9, 4, 15, 8, 2, 30, 11]))
print(triRapide([7, 3, 15, 2, 9, 11]))
print(triRapide([42, -5, 0, 18, 3, 27, -1]))
print(triRapide([100, 54, 76, 12, 89, 33]))
print(triRapide([-10, -3, -25, 4, 8, 1]))
print(triRapide([5, 5, 2, 9, 2, 8, 1]))
print(triRapide([13, 99, 24, 67, 45, 2, 88]))
print(triRapide([0, 1, -1, 2, -2, 3, -3]))





"""contre toutes attentes, j'ai réussi du premier coup le palindrome et le tri rapide mais pas le fizzbuzz :)"""