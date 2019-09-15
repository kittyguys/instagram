let mongoose = require("mongoose");

const server = "localhost:27017";
const database = "instagram";

class Database {
  connect() {
    mongoose
      .connect(
        `mongodb://heroku_k0cqcb90:2dip978rhsvn4osiul259p9fc4@ds041506.mlab.com:41506/heroku_k0cqcb90`,
        { useNewUrlParser: true }
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.log(err);
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
