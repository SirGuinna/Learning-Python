# pip install pyshorteners
import pyshorteners

# coloque sua url abaixo entre as aspas
url = "http://15.228.226.85:1880/ui/#!/0?socketid=whqON9YbZL-37qTMAAAd"

link = pyshorteners.Shortener()
shorten_url = link.tinyurl.short(url)
print(f'\n{shorten_url}')

# pronto, basta executar o código e o link será gerado