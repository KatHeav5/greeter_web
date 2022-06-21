# basics
# def greet(count):
#     for i in range(count):
#         print(f"hello {i} times")

# greet(5)

'''
---------------------
'''
# Simple Flask Web API / App

# Install FLask with Pip (globally for now, so just once)
# pip install flask

from flask import Flask, redirect
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# http get request to base path
@app.route('/')
def hello_world():
    #return 'Hello, World!'
    return redirect('/fen/go_girl')

# handler http get request to /fen
@app.route('/fen')
def fens_world():    
    return "Fen's World from Server!"

#http get request to/fen/go_girl
@app.route('/fen/go_girl')  
def Go_Girl():
    return "Go Girl, Go!!!"

# python app.py
app.run(host='0.0.0.0', port = 7000)

