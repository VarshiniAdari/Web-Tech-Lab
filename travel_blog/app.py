from flask import Flask, render_template, request, redirect
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27011/")
db = client["travelBlog"]
feedbacks = db["feedbacks"]

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        fb = {
            "name": request.form['name'],
            "email": request.form['email'],
            "message": request.form['message']
        }
        feedbacks.insert_one(fb)
        return redirect('/thankyou')
    return render_template("feedback.html")

@app.route('/thankyou')
def thankyou():
    return render_template("thankyou.html")

if __name__ == '__main__':
    app.run(debug=True)
