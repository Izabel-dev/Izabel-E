from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/denuncia')
def denuncia():
    return render_template('denuncia.html')

@app.route('/pagina')
def pagina():
    return render_template('pagina.html')

if __name__ == '__main__':
    app.run(debug=True)