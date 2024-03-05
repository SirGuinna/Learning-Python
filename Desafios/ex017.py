co = float(input('Digite o comprimento do Cateto Oposto: '))
ca = float (input('Digite o comprimento do Cateto Adjacente: '))
hp = (co ** 2 + ca ** 2) ** (1/2)
print('O Comprimento da Hipotenusa é {:.2f}'.format(hp))

# O quadrado da hipotenusa é igual a soma do quadrado dos catetos