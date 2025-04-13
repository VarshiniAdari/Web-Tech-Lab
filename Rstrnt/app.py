from flask import Flask, render_template, request, redirect
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["restaurant_db"]
reservations = db["reservations"]

@app.route('/')
def about():
    return render_template('about.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/reservation', methods=['GET', 'POST'])
def reservation():
    if request.method == 'POST':
        name = request.form['name']
        date = request.form['date']
        time = request.form['time']
        guests = request.form['guests']

        reservations.insert_one({
            "name": name,
            "date": date,
            "time": time,
            "guests": guests
        })
        return redirect('/reservation')
    return render_template('reservation.html')

if __name__ == '__main__':
    app.run(debug=True)
