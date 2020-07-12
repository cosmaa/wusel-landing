import json

from flask import Flask, url_for
from flask_cors import CORS

with open("data/json/todos.json") as f:
    data = json.load(f)

TODO = data

app = Flask(__name__, static_folder='static')

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

from app import routes
