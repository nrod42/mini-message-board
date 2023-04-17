const express = require('express');
const app = express();
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 3000;


const indexRouter = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/new', function(req, res) {
  res.render('pages/new');
});

app.listen(port);
console.log(`Server is listening on port ${port}`);



// const createError = require('http-errors');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });