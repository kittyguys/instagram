let mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  uid: String,
  name: String,
  imagePath: String,
  date: String,
  like: [String]
});

module.exports = mongoose.model("Photo", photoSchema);
