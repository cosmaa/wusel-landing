import os
from flask import render_template, send_from_directory, jsonify

from app import app, TODO


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, '/templates'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


@app.route('/todos', methods=['GET'])
def all_todos():

    return jsonify({
        'status': 'success',
        'todos': TODO
    })
