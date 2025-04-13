const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;
const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

let feedbackCollection;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'images')));

async function run() {
    try {
        await client.connect();
        const db = client.db('collegeDept');
        feedbackCollection = db.collection('feedbacks');
        console.log("MongoDB connected");

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

app.post('/feedback', async (req, res) => {
    const { name, email, message } = req.body;
    await feedbackCollection.insertOne({ name, email, message });
    res.send("<h2>Thank you for your feedback!</h2><a href='/'>Go Back</a>");
});

run();
