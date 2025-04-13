const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/artGalleryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    tickets: Number
});

const Booking = mongoose.model("Booking", BookingSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/book", (req, res) => {
    const booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        tickets: req.body.tickets
    });
    booking.save().then(() => res.redirect("/thankyou"));
});

app.get("/thankyou", (req, res) => {
    res.sendFile(__dirname + "/public/thankyou.html");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
