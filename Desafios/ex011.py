l = float(input('Digite a Largura da Parede: '))
a = float(input('Digite a Altura da Parede: '))
area = l * a
tinta = area / 2**2
print('Para uma parede de {}m² é necessário {} litros de tinta'.format(area, tinta))