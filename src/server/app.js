var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./passport");

var photosRouter = require("./routes/photos");
var usersRouter = require("./routes/users");

var database = require("./db/database");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/photos", photosRouter);
app.use("/users", usersRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../server/public/index.html"));
});

database.connect();

module.exports = app;
