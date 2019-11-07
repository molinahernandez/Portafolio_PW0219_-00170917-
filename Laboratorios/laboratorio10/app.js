var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDB = require('./mongo')

//rutas 
var indexRouter = require('./routes/index');
var RegistroRouter = require('./routes/registro');

var app = express();

mongoDB.connect(); //Conexion de la Base

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/registro', RegistroRouter);

module.exports = app;
