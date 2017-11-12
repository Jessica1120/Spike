var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var indexRouter = require('./routes/index');
var dog = require('./routes/dog');

var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/dog', dog);

app.listen(port, function(){
    console.log('listening on port', port);
});