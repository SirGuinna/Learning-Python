import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import sqlite3

class EstoqueApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Controle de Estoque")
        
        # Conectando ao banco de dados SQLite
        self.conn = sqlite3.connect('estoque.db')
        self.c = self.conn.cursor()
        
        # Criando a tabela de produtos se não existir
        self.c.execute('''CREATE TABLE IF NOT EXISTS produtos (
                        id INTEGER PRIMARY KEY,
                        nome TEXT NOT NULL,
                        quantidade INTEGER,
                        categoria TEXT
                        )''')
        self.conn.commit()
        
        # Criando a interface gráfica
        self.create_widgets()
        
    def create_widgets(self):
        # Frame principal
        main_frame = tk.Frame(self.root)
        main_frame.grid(row=0, column=0, padx=5, pady=5, sticky='nw')
        
        # Frame para entradas de texto
        entry_frame = tk.Frame(main_frame)
        entry_frame.grid(row=0, column=0, padx=5, pady=5, sticky='nw')
        
        # Labels e Entradas de texto
        tk.Label(entry_frame, text="Nome do Produto:").grid(row=0, column=0, padx=5, pady=5, sticky='w')
        tk.Label(entry_frame, text="Quantidade:").grid(row=1, column=0, padx=5, pady=5, sticky='w')
        tk.Label(entry_frame, text="Categoria:").grid(row=2, column=0, padx=5, pady=5, sticky='w')
        
        self.nome_entry = tk.Entry(entry_frame)
        self.nome_entry.grid(row=0, column=1, padx=5, pady=5, sticky='w')
        
        self.quantidade_entry = tk.Entry(entry_frame)
        self.quantidade_entry.grid(row=1, column=1, padx=5, pady=5, sticky='w')
        
        self.categoria_entry = tk.Entry(entry_frame)
        self.categoria_entry.grid(row=2, column=1, padx=5, pady=5, sticky='w')
        
        # Frame para os botões
        button_frame = tk.Frame(main_frame)
        button_frame.grid(row=1, column=0, padx=5, pady=5, sticky='nw')
        
        # Botões
        add_button = tk.Button(button_frame, text="Adicionar Produto", command=self.adicionar_produto, bg="lightblue", width=20)
        add_button.pack(side='top', padx=5, pady=5)
        
        remove_button = tk.Button(button_frame, text="Remover Produto", command=self.confirmar_remover_produto, bg="red", width=20)
        remove_button.pack(side='top', padx=5, pady=5)
        
        update_button = tk.Button(button_frame, text="Atualizar Quantidade", command=self.confirmar_atualizar_quantidade, bg="lightgreen", width=20)
        update_button.pack(side='top', padx=5, pady=5)
        
        search_button = tk.Button(button_frame, text="Pesquisar por Categoria", command=self.pesquisar_por_categoria, bg="lightsalmon", width=20)
        search_button.pack(side='top', padx=5, pady=5)
        
        show_all_button = tk.Button(button_frame, text="Mostrar Todos", command=self.carregar_dados, bg="lightsalmon", width=20)
        show_all_button.pack(side='top', padx=5, pady=5)
        
        # Tabela
        self.tree = ttk.Treeview(self.root, columns=('Nome', 'Quantidade', 'Categoria'))
        self.tree.heading('#0', text='ID', anchor='center')
        self.tree.heading('#1', text='Nome', anchor='center')
        self.tree.heading('#2', text='Quantidade', anchor='center')
        self.tree.heading('#3', text='Categoria', anchor='center')
        self.tree.grid(row=0, column=1, padx=5, pady=5, sticky='nsew')
        
        # Configurar redimensionamento
        self.root.columnconfigure(1, weight=1)
        self.root.rowconfigure(0, weight=1)
        
        # Preencher tabela com dados do banco de dados
        self.carregar_dados()
        
    def adicionar_produto(self):
        nome = self.nome_entry.get()
        quantidade = int(self.quantidade_entry.get())
        categoria = self.categoria_entry.get()
        
        # Inserindo dados na tabela
        self.c.execute("INSERT INTO produtos (nome, quantidade, categoria) VALUES (?, ?, ?)", (nome, quantidade, categoria))
        self.conn.commit()
        
        # Atualizar tabela na interface gráfica
        self.carregar_dados()
        
        # Limpar campos de entrada
        self.nome_entry.delete(0, tk.END)
        self.quantidade_entry.delete(0, tk.END)
        self.categoria_entry.delete(0, tk.END)
        
    def confirmar_remover_produto(self):
        selected_item = self.tree.selection()
        if not selected_item:
            messagebox.showerror("Erro", "Selecione um produto para remover.")
            return
        
        resultado = messagebox.askquestion("Confirmar Remoção", "Tem certeza que deseja remover o produto selecionado?")
        if resultado == 'yes':
            self.remover_produto()
        
    def remover_produto(self):
        selected_item = self.tree.selection()[0]
        id = self.tree.item(selected_item, 'text')
        
        # Remover produto do banco de dados
        self.c.execute("DELETE FROM produtos WHERE id=?", (id,))
        self.conn.commit()
        
        # Atualizar tabela na interface gráfica
        self.carregar_dados()
        
    def confirmar_atualizar_quantidade(self):
        selected_item = self.tree.selection()
        if not selected_item:
            messagebox.showerror("Erro", "Selecione um produto para atualizar a quantidade.")
            return
        
        resultado = messagebox.askquestion("Confirmar Atualização", "Tem certeza que deseja atualizar a quantidade do produto selecionado?")
        if resultado == 'yes':
            self.atualizar_quantidade()
        
    def atualizar_quantidade(self):
        selected_item = self.tree.selection()[0]
        id = self.tree.item(selected_item, 'text')
        quantidade = int(self.quantidade_entry.get())
        
        # Atualizar quantidade do produto no banco de dados
        self.c.execute("UPDATE produtos SET quantidade=? WHERE id=?", (quantidade, id))
        self.conn.commit()
        
        # Atualizar tabela na interface gráfica
        self.carregar_dados()
        
    def pesquisar_por_categoria(self):
        categoria = self.categoria_entry.get()
        
        # Limpar a tabela
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        
        # Recuperar dados do banco de dados
        self.c.execute("SELECT * FROM produtos WHERE categoria=?", (categoria,))
        produtos = self.c.fetchall()
        
        # Preencher tabela com dados recuperados
        for produto in produtos:
            self.tree.insert('', 'end', text=produto[0], values=(produto[1], produto[2], produto[3]))
        
    def carregar_dados(self):
        # Limpar a tabela
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        
        # Recuperar dados do banco de dados
        self.c.execute("SELECT * FROM produtos")
        produtos = self.c.fetchall()
        
        # Preencher tabela com dados recuperados
        for produto in produtos:
            self.tree.insert('', 'end', text=produto[0], values=(produto[1], produto[2], produto[3]))
                      
# Criar a janela principal
root = tk.Tk()
app = EstoqueApp(root)
root.mainloop()
