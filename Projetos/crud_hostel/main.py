import sqlite3
import tkinter as tk
import datetime
from tkinter import messagebox
from tkinter import ttk
from tkcalendar import DateEntry
from PIL import Image, ImageTk

def criar_tabela():
    conexao = sqlite3.connect('dados.db')
    cursor = conexao.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS hospedes (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nome_completo TEXT NOT NULL,
                        cpf TEXT NOT NULL,
                        telefone TEXT NOT NULL,
                        data_entrada TEXT NOT NULL,
                        data_saida TEXT NOT NULL,
                        tipo_quarto TEXT NOT NULL,
                        total_itens_consumidos REAL,
                        valor_diaria REAL)''')
    conexao.commit()
    conexao.close()

def inserir_hospede():
    nome_completo = entry_nome_completo.get()
    cpf = entry_cpf.get()
    telefone = entry_telefone.get()
    data_entrada = entry_data_entrada.get()
    data_saida = entry_data_saida.get()
    tipo_quarto = opcao_quarto_var.get()
    total_itens_consumidos = entry_total_itens_consumidos.get()
    valor_diaria = entry_valor_diaria.get()

    if nome_completo and cpf and telefone and data_entrada and data_saida and tipo_quarto and total_itens_consumidos and valor_diaria:
        inserir_hospede_banco(nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria)
        exibir_hospedes()
        limpar_campos()
        messagebox.showinfo("Sucesso", "Check-in com sucesso!")
    else:
        messagebox.showerror("Erro", "Por favor, preencha todos os campos.")

def inserir_hospede_banco(nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria):
    conexao = sqlite3.connect('dados.db')
    cursor = conexao.cursor()
    cursor.execute('''INSERT INTO hospedes (nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?)''', (nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria))
    conexao.commit()
    conexao.close()

def deletar_hospede():
    item_selecionado = treeview.selection()
    if item_selecionado:
        nome_completo = treeview.item(item_selecionado)['values'][0]
        
        # Exibir mensagem de confirmação
        resposta = messagebox.askokcancel("Confirmação", f"Tem certeza que deseja deletar o hóspede '{nome_completo}'?")
        
        # Verificar se o usuário confirmou a exclusão
        if resposta:
            conexao = sqlite3.connect('dados.db')
            cursor = conexao.cursor()
            cursor.execute('''DELETE FROM hospedes WHERE nome_completo=?''', (nome_completo,))
            conexao.commit()
            conexao.close()
            messagebox.showinfo("Sucesso", "Hóspede deletado com sucesso!")
            exibir_hospedes()
    else:
        messagebox.showerror("Erro", "Por favor, selecione um hóspede.")

def exibir_hospedes():
    for i in treeview.get_children():
        treeview.delete(i)
        
    conexao = sqlite3.connect('dados.db')
    cursor = conexao.cursor()
    cursor.execute('''SELECT * FROM hospedes''')
    hospedes = cursor.fetchall()
    conexao.close()
    
    for hospede in hospedes:
        # Inserir os dados corretamente na treeview
        treeview.insert('', 'end', text=hospede[0], values=(hospede[1], hospede[2], hospede[3], hospede[4], hospede[5], hospede[6], hospede[7], hospede[8]))

def limpar_campos():
    entry_nome_completo.delete(0, tk.END)
    entry_cpf.delete(0, tk.END)
    entry_telefone.delete(0, tk.END)
    entry_data_entrada.delete(0, tk.END)
    entry_data_saida.delete(0, tk.END)
    entry_valor_diaria.delete(0, tk.END)
    entry_total_itens_consumidos.delete(0, tk.END)

def atualizar_dados():
    item_selecionado = treeview.selection()
    if item_selecionado:
        hospede = treeview.item(item_selecionado)
        values = hospede['values']
        if all(values):  # Verifica se todos os valores na lista 'values' não são vazios
            nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria = values

            # Preenchendo os campos de entrada com os valores correspondentes
            entry_nome_completo.delete(0, tk.END)
            entry_nome_completo.insert(0, nome_completo)
            entry_cpf.delete(0, tk.END)
            entry_cpf.insert(0, cpf)
            entry_telefone.delete(0, tk.END)
            entry_telefone.insert(0, telefone)
            entry_data_entrada.delete(0, tk.END)
            entry_data_entrada.insert(0, data_entrada)
            entry_data_saida.delete(0, tk.END)
            entry_data_saida.insert(0, data_saida)
            opcao_quarto_var.set(tipo_quarto)
            entry_total_itens_consumidos.delete(0, tk.END)
            entry_total_itens_consumidos.insert(0, total_itens_consumidos)
            entry_valor_diaria.delete(0, tk.END)
            entry_valor_diaria.insert(0, valor_diaria)
            botao_deletar.configure(state=tk.DISABLED)  # Desativa o botão "Deletar"
            botao_atualizar.configure(state=tk.DISABLED)  # Desativa o botão "Atualizar"
            botao_encerrar_hospedagem.configure(state=tk.DISABLED)  # Desativa o botão "Checkout"            
            botao_cadastrar.configure(state=tk.DISABLED)  # Desativa o botão "Cadastrar"
            botao_confirmar_atualizacao.configure(state=tk.NORMAL)  # Ativa o botão "Confirmar Atualização"
        else:
            messagebox.showerror("Erro", "Os dados do hóspede estão incompletos.")
    else:
        messagebox.showerror("Erro", "Por favor, selecione um hóspede.")

def confirmar_atualizacao():
    # Verifica se algum item foi selecionado na treeview
    item_selecionado = treeview.selection()
    if item_selecionado:
        hospede_id = treeview.item(item_selecionado, 'text')  # Obtém o ID do hóspede
        hospede = treeview.item(item_selecionado)['values']
        # Obtém os valores dos campos de entrada
        nome_completo = entry_nome_completo.get()
        cpf = entry_cpf.get()
        telefone = entry_telefone.get()
        data_entrada = entry_data_entrada.get()
        data_saida = entry_data_saida.get()
        tipo_quarto = opcao_quarto_var.get()
        total_itens_consumidos = entry_total_itens_consumidos.get()
        valor_diaria = entry_valor_diaria.get()

        # Verifica se algum campo está vazio
        if not all((nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria)):
            messagebox.showerror("Erro", "Por favor, preencha todos os campos.")
            return

        # Verifica se os dados foram alterados
        if (nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria) != tuple(hospede):
            try:
                conexao = sqlite3.connect('dados.db')
                cursor = conexao.cursor()
                cursor.execute('''UPDATE hospedes SET nome_completo=?, cpf=?, telefone=?, data_entrada=?, data_saida=?, tipo_quarto=?, total_itens_consumidos=?, valor_diaria=? WHERE id=?''',
                               (nome_completo, cpf, telefone, data_entrada, data_saida, tipo_quarto, total_itens_consumidos, valor_diaria, hospede_id))
                linhas_afetadas = cursor.rowcount  # Verifica o número de linhas afetadas pela atualização
                conexao.commit()
                conexao.close()
                
                if linhas_afetadas != 0:
                    exibir_hospedes()  # Atualiza a exibição dos hóspedes na tabela
                    limpar_campos()  # Limpa os campos após a atualização
                    botao_cadastrar.configure(state=tk.NORMAL)  # Ativa o botão "Cadastrar" após a atualização
                    botao_deletar.configure(state=tk.NORMAL)  # Ativa o botão "Deletar" após a atualização
                    botao_atualizar.configure(state=tk.NORMAL)  # Ativa o botão "Atualizar" após a atualização
                    botao_encerrar_hospedagem.configure(state=tk.NORMAL)  # Ativa o botão "Chekout" após a atualização
                    botao_confirmar_atualizacao.configure(state=tk.DISABLED)  # Desativa o botão "Confirmar Atualização" após a confirmação
                    messagebox.showinfo("Sucesso", "Hóspede atualizado com sucesso!")
                else:
                    messagebox.showwarning("Aviso", "Nenhuma alteração foi feita no banco de dados.")
            except Exception as e:
                messagebox.showerror("Erro", f"Erro ao atualizar o hóspede: {e}")
        else:
            messagebox.showwarning("Aviso", "Nenhuma alteração foi feita nos dados do hóspede.")
    else:
        messagebox.showerror("Erro", "Por favor, selecione um hóspede.")

def gerar_log(hospede, valor_descricao, forma_pagamento):
    if hospede:
        nome_completo = hospede[0]
        cpf = hospede[1]
        telefone = hospede[2]
        data_entrada = hospede[3]
        data_saida = hospede[4]
        tipo_quarto = hospede[5]
        total_itens_consumidos = hospede[7]
        valor_diaria = hospede[6]

########################### LOGS DE HOSPEDES - GERA LOCALMENTE EM .TXT ####################################
        log_data = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_filename = f"{nome_completo}_{log_data}.txt"
        # CASO QUEIRA ESPECIFICAR O DIRETORIO PARA SALVAR O LOG ALTERE A LINHA ACIMA POR ESSA ABAIXO
        # log_filename = "/caminho/para/seu/diretorio/" + f"{nome_completo}_{log_data}.txt"
###########################################################################################################

        with open(log_filename, "w") as log_file:
            log_file.write(f"Nome completo: {nome_completo}\n")
            log_file.write(f"CPF: {cpf}\n")
            log_file.write(f"Telefone: {telefone}\n")
            log_file.write(f"Data de entrada: {data_entrada}\n")
            log_file.write(f"Data de saída: {data_saida}\n")
            log_file.write(f"Tipo de quarto: {tipo_quarto}\n")
            log_file.write(f"Total de itens consumidos: {total_itens_consumidos}\n")
            log_file.write(f"Valor da diária: {valor_diaria}\n")
            log_file.write(f"Valor/Descrição: {valor_descricao}\n")
            log_file.write(f"Forma de pagamento: {forma_pagamento}\n")

def confirmar_encerramento(hospede, valor_descricao, forma_pagamento, janela):
    if hospede:
        gerar_log(hospede, valor_descricao, forma_pagamento)
        
        conexao = sqlite3.connect('dados.db')
        cursor = conexao.cursor()
        cursor.execute('''DELETE FROM hospedes WHERE nome_completo=?''', (hospede[0],))
        conexao.commit()
        conexao.close()

        messagebox.showinfo("Sucesso", "Check-out feito com sucesso!")
        exibir_hospedes()
        janela.destroy() # Fecha a janela após o check-out ser concluído (SUSPOSTAMENTE NÉ POW)
    else:
        messagebox.showerror("Erro", "Por favor, selecione um hóspede.")

def encerrar_hospedagem():
    nova_janela = tk.Toplevel(janela)
    nova_janela.title("Encerrar Hospedagem")
    
    item_selecionado = treeview.selection()
    if item_selecionado:
        hospede = treeview.item(item_selecionado, 'values')  # Obtém os valores do item selecionado na treeview
        
        if hospede and len(hospede) >= 8:  # Verifica se os dados do hóspede estão presentes e completos
            valor_diaria = hospede[7]
            total_itens_consumidos = hospede[6]

            tk.Label(nova_janela, text="LEMBRETE: Lembre-se de Atualizar a DATA DE SAÍDA antes de fazer o CHECKOUT do Hospede!").pack()
            tk.Label(nova_janela, text=" ").pack()
            tk.Label(nova_janela, text="Custo(R$) da Hospedagem   =   (Valor da Diária x Total de Dias) + Itens Consumidos").pack()
            tk.Label(nova_janela, text=" ").pack()
            tk.Label(nova_janela, text=f"Valor da Diária(R$): {valor_diaria}").pack()
            tk.Label(nova_janela, text=f"Total Itens Consumidos(R$): {total_itens_consumidos}").pack()
            tk.Label(nova_janela, text=" ").pack()
            tk.Label(nova_janela, text="(R$)Valor/Descrição:").pack()
            entry_observacoes = tk.Entry(nova_janela)
            entry_observacoes.pack()
            tk.Label(nova_janela, text=" ").pack()
            tk.Label(nova_janela, text="LEMBRETE: Lembre-se de SELECIONAR a FORMA DE PAGAMENTO!").pack()
            opcoes_pagamento = ["Dinheiro", "Pix", "Cartão", "Dinheiro/Cartão", "Dinheiro/Pix", "Pix/Cartão", "Voluntário(a)"]
            opcao_pagamento_var = tk.StringVar()
            opcao_pagamento_var.set(opcoes_pagamento[0])
            tk.OptionMenu(nova_janela, opcao_pagamento_var, *opcoes_pagamento).pack()
            tk.Label(nova_janela, text=" ").pack()
            tk.Label(nova_janela, text=" ").pack()

            # Botão Confirmar - Janela de Encerrar Hospedagem
            def confirmar_e_fechar():
                confirmar_encerramento(hospede, entry_observacoes.get(), opcao_pagamento_var.get(), nova_janela)

            botao_confirmar = tk.Button(nova_janela, text="Confirmar", command=confirmar_e_fechar, bg="light blue")
            botao_confirmar.pack()
        else:
            tk.Label(nova_janela, text="Dados do Hóspede incompletos.").pack()
    else:
        tk.Label(nova_janela, text="Não foi possível recuperar os valores. Selecione um Hóspede").pack()

# Criação da janela principal
janela = tk.Tk()
janela.title("Gestão de Hospedes")

largura_janela = 1024
altura_janela = 768

largura_tela = janela.winfo_screenwidth()
altura_tela = janela.winfo_screenheight()

posx = largura_tela/2 - largura_janela/2
posy = altura_tela/2 - altura_janela/2

janela.geometry("%dx%d+%d+%d" % (largura_janela, altura_janela, posx, posy))

# Criação dos widgets
tk.Label(janela, text="'Nasceste tão bela nessas serras, Inspiração da nobre natureza.'", font=("Arial", 15)).pack()
tk.Label(janela, text="Trecho do Hino de Camocim de São Feliz - PE", font=("Arial", 8)).pack()

frame_formulario = tk.Frame(janela)
frame_formulario.pack(side=tk.LEFT, padx=10, pady=10, fill=tk.BOTH, expand=True)

############### Carrega a imagem do Hostel na janela Principal ###############
imagem = Image.open("imagem.png")  # Nome da imagem
# Redimensiona a imagem para o tamanho desejado
largura_imagem = 250  # largura
altura_imagem = 270  # altura
imagem = imagem.resize((largura_imagem, altura_imagem), Image.LANCZOS)   # Use LANCZOS ou BICUBIC
imagem_tk = ImageTk.PhotoImage(imagem) # Converte a imagem para um formato compatível com tkinter
label_imagem = tk.Label(janela, image=imagem_tk) # Exibe a imagem em um widget Label
label_imagem.place(x=90, y=350) # Posiciona a imagem no canto escolhido
###############################################################################

label_nome_completo = tk.Label(frame_formulario, text="Nome Completo:")
label_nome_completo.grid(row=0, column=0, padx=10, pady=5, sticky="w")
entry_nome_completo = tk.Entry(frame_formulario)
entry_nome_completo.grid(row=0, column=1, padx=10, pady=5, sticky="w")

label_cpf = tk.Label(frame_formulario, text="CPF:")
label_cpf.grid(row=1, column=0, padx=10, pady=5, sticky="w")
entry_cpf = tk.Entry(frame_formulario)
entry_cpf.grid(row=1, column=1, padx=10, pady=5, sticky="w")

label_telefone = tk.Label(frame_formulario, text="Telefone:")
label_telefone.grid(row=2, column=0, padx=10, pady=5, sticky="w")
entry_telefone = tk.Entry(frame_formulario)
entry_telefone.grid(row=2, column=1, padx=10, pady=5, sticky="w")

label_data_entrada = tk.Label(frame_formulario, text="Data de Entrada:")
label_data_entrada.grid(row=3, column=0, padx=10, pady=5, sticky="w")
entry_data_entrada = DateEntry(frame_formulario, width=12)
entry_data_entrada.grid(row=3, column=1, padx=10, pady=5, sticky="w")

label_data_saida = tk.Label(frame_formulario, text="Data de Saída:")
label_data_saida.grid(row=4, column=0, padx=10, pady=5, sticky="w")
entry_data_saida = DateEntry(frame_formulario, width=12)
entry_data_saida.grid(row=4, column=1, padx=10, pady=5, sticky="w")

label_tipo_quarto = tk.Label(frame_formulario, text="Tipo de Quarto:")
label_tipo_quarto.grid(row=5, column=0, padx=10, pady=5, sticky="w")
opcoes_quarto = ["Suíte", "Compart.", "Camping", "Motorhome", "Voluntário(a)"]
opcao_quarto_var = tk.StringVar()
opcao_quarto_var.set(opcoes_quarto[0])
tk.OptionMenu(frame_formulario, opcao_quarto_var, *opcoes_quarto).grid(row=5, column=1, padx=10, pady=5, sticky="w")

label_valor_diaria = tk.Label(frame_formulario, text="Valor da Diária(R$):")
label_valor_diaria.grid(row=6, column=0, padx=10, pady=5, sticky="w")
entry_valor_diaria = tk.Entry(frame_formulario)
entry_valor_diaria.grid(row=6, column=1, padx=10, pady=5, sticky="w")

label_total_itens_consumidos = tk.Label(frame_formulario, text="Total(R$) Itens Consumidos:")
label_total_itens_consumidos.grid(row=7, column=0, padx=10, pady=5, sticky="w")
entry_total_itens_consumidos = tk.Entry(frame_formulario)
entry_total_itens_consumidos.grid(row=7, column=1, padx=10, pady=5, sticky="w")

frame_botoes = tk.Frame(janela)
frame_botoes.pack(side=tk.RIGHT, padx=10, pady=10, fill=tk.Y)

botao_cadastrar = tk.Button(frame_botoes, text="Cadastrar", command=inserir_hospede, bg="light green")
botao_cadastrar.pack(side=tk.TOP, padx=5, pady=5, fill=tk.X)

botao_deletar = tk.Button(frame_botoes, text="Deletar", command=deletar_hospede, bg="red")
botao_deletar.pack(side=tk.TOP, padx=5, pady=5, fill=tk.X)

botao_atualizar = tk.Button(frame_botoes, text="Atualizar", command=atualizar_dados, bg="light blue")
botao_atualizar.pack(side=tk.TOP, padx=5, pady=5, fill=tk.X)

botao_confirmar_atualizacao = tk.Button(frame_botoes, text="Confirmar Atualização", command=confirmar_atualizacao, bg="light blue")
botao_confirmar_atualizacao.pack(side=tk.TOP, padx=5, pady=5, fill=tk.X)

botao_encerrar_hospedagem = tk.Button(frame_botoes, text="CheckOut", command=encerrar_hospedagem, bg="orange")
botao_encerrar_hospedagem.pack(side=tk.TOP, padx=5, pady=5, fill=tk.X)

frame_tabela = tk.Frame(janela)
frame_tabela.pack(side=tk.BOTTOM, padx=10, pady=10, fill=tk.BOTH, expand=True)

treeview = ttk.Treeview(frame_tabela, columns=("Nome", "CPF", "Telefone", "Entrada", "Saída", "Quarto", "Total Itens Consumidos", "Valor Diária"), selectmode="extended")
treeview.pack(side=tk.LEFT, fill="both", expand=True)

scrollbar_y = ttk.Scrollbar(frame_tabela, orient="vertical", command=treeview.yview)
scrollbar_y.pack(side=tk.RIGHT, fill="y")

treeview.configure(yscrollcommand=scrollbar_y.set)

treeview.heading('#0', text='', anchor='center')
treeview.column('#0', width=0, stretch=tk.NO)
treeview.heading('#1', text='Nome', anchor='center')
treeview.column('#1', width=150, anchor='center')
treeview.heading('#2', text='CPF', anchor='center')
treeview.column('#2', width=100, anchor='center')
treeview.heading('#3', text='Telefone', anchor='center')
treeview.column('#3', width=100, anchor='center')
treeview.heading('#4', text='Entrada', anchor='center')
treeview.column('#4', width=100, anchor='center')
treeview.heading('#5', text='Saída', anchor='center')
treeview.column('#5', width=100, anchor='center')
treeview.heading('#6', text='Quarto', anchor='center')
treeview.column('#6', width=100, anchor='center')
treeview.heading('#7', text='Itens Consumidos', anchor='center')
treeview.column('#7', width=150, anchor='center')
treeview.heading('#8', text='Valor Diária', anchor='center')
treeview.column('#8', width=100, anchor='center')

# Ocultar a coluna do CPF
treeview.column('#2', width=0, stretch=tk.NO)
# Ocultar a coluna do Valor Diária
treeview.column('#8', width=0, stretch=tk.NO)


# Cria a tabela no banco de dados
criar_tabela()

# Exibe os hóspedes cadastrados
exibir_hospedes()

# Inicia o loop principal da aplicação
janela.mainloop()
