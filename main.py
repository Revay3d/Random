import os
import random

os.system("cls")
numero = random.randint(1,10)

usuario = int(input("estoy pensando en un numero del 1 al 10 ¿cual es?: "))

if numero == usuario:
    print("si, ese era el numero")

else:
    print(f"ese no ere, era: {numero}")
