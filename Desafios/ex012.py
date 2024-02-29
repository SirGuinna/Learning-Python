p = float(input('Digite o Preço do Produto: '))
d = p * 5 / 100
total = p - d
print('Com desconto de 5%, fica por {:.2f} reais'.format(total))