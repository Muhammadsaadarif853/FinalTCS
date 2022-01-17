var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var studentRouter = require('./routes/student');
var teacherRouter = require('./routes/teacher');
var headRouter = require('./routes/head');

const connection = mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

connection.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });




app.use(express.json());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/head', headRouter);
app.use('/teacher', teacherRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);



app.listen(5000, () => {
    console.log("Listening at 5000");
})

module.exports = app; 