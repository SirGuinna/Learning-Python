from flask import Flask, render_template
from config import GOOGLE_MAPS_API_KEY

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', api_key=GOOGLE_MAPS_API_KEY)

if __name__ == '__main__':
    app.run(debug=True)