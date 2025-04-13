const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views'))); // Serve HTML from views

mongoose.connect('mongodb://localhost:27017/travelBlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/submit-feedback', async (req, res) => {
    const { name, email, message } = req.body;
    await Feedback.create({ name, email, message });
    res.send("<h2>Thank you for your feedback!</h2><a href='/'>Back to blog</a>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
