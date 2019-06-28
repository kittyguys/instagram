let mongoose = require("mongoose");

const server = "localhost:27017";
const database = "instagram";

class Database {
  connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
