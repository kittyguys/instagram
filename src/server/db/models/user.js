let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: String,
    password: String,
    avater: String,
    photos: [String],
    follow: [String],
    follower: [String],
    mail: String,
    tel: String,
    sex: String,
    desc: String,
})

module.exports = mongoose.model('User', userSchema);