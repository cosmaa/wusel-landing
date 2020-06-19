from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length


class LoginForm(FlaskForm):
    login_code = StringField('Sprich Freund:', validators=[DataRequired(),Length(min=6,max=6, message="nope: muss 6 Zahlen lang sein")])
    submit = SubmitField('und tritt ein')