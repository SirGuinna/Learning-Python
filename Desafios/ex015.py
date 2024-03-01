dias = int(input('Quantos dias o veículo esteve alugado? '))
km = float(input('Quantos Kilometros foram percorridos no total? '))
total = (60 * dias) + (0.15 * km)
print('O total a pagar é R${:.2f}'.format(total))