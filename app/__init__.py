import json

from flask import Flask, url_for
from flask_cors import CORS

with open("data/json/tasks.json") as f:
    data = json.load(f)

TASKS = data

app = Flask(__name__, static_folder='static')

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

from app import routes
from app import neo4j
