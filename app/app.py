from flask import Flask, flash, render_template, url_for, session, request, redirect


app = Flask(__name__)
app.secret_key = os.urandom(24)