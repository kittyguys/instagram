var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/instagram';

var indexRouter = require('./routes/index');
var photosRouter = require('./routes/photos');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", indexRouter);
app.use("/photos", photosRouter);
app.use("/users", usersRouter);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

mongoose.connect(dbUrl, dbErr => {
    if(dbErr) throw new Error(dbErr)
    else console.log('db connected.')
})

module.exports = app;
