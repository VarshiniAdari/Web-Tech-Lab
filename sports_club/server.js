const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/sportsClubDB', { useNewUrlParser: true, useUnifiedTopology: true });

const MemberSchema = new mongoose.Schema({
    age: Number,
    sport: String,
    slot: String
});
const Member = mongoose.model('Member', MemberSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/join', (req, res) => {
    const member = new Member({
        age: req.body.age,
        sport: req.body.sport,
        slot: req.body.slot
    });
    member.save().then(() => res.redirect('/thankyou'));
});

app.get('/thankyou', (req, res) => {
    res.sendFile(__dirname + '/public/thankyou.html');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
