let mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    date: String,
    like: [String],
})

module.exports = mongoose.model('Photo', photoSchema);
