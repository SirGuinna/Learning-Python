l = float(input('Digite a Largura da Parede: '))
a = float(input('Digite a Altura da Parede: '))
area = l * a
tinta = area / 2
print('Sua parede tem dimensão de {}x{}m e a área é de {}m² então será necessário {:.2f}litros de tinta'.format(l, a, area, tinta))