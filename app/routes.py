from flask import render_template, flash, url_for, redirect
from app import app


@app.route('/')
def hello():
    return render_template('hello.html', title='space')


@app.route('/impressum')
def impressum():
    return render_template('impressum.html', title='impressum')
