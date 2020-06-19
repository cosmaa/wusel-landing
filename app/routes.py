from flask import render_template, flash, url_for, redirect
from app import app
from app.components.forms import LoginForm


@app.route('/')
def index():
    return render_template('index.html', title='space')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.login_code.data == '261087':
            flash("aha! du kennst wohl mein Geburtstag", 'success')
            return redirect(url_for('index'))
        else:
            flash("pff noe du nich", 'danger')
    return render_template('login.html', title='login', form=form)


@app.route('/impressum')
def impressum():
    return render_template('impressum.html', title='impressum', form=impressum)
