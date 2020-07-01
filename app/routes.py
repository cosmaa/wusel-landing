from flask import render_template, flash, url_for, redirect
from app import app


@app.route('/')
def hello():
    return render_template('pages/hello.html', title='space')


@app.route('/impressum')
def impressum():
    return render_template('pages/impressum.html', title='impressum')


@app.route("/wishes")
def wishes():
    return render_template('pages/wish-list.html', title='wish-list')
