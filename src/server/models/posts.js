const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const postSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    good: Number,
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post