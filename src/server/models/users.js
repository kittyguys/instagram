const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
    id: String,
    password: String,
    avater: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User