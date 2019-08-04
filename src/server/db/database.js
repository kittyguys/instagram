let mongoose = require("mongoose");

const server = "mongo:27017";
const database = "instagram";

class Database {
  connect() {
    mongoose
      .connect(
        `mongodb://heroku_k0cqcb90:2dip978rhsvn4osiul259p9fc4@ds041506.mlab.com:41506/heroku_k0cqcb90`
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
