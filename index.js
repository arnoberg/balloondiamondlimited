/// START
var compression = require('compression');
var express = require('express');
var favicon = require('serve-favicon')
var path = require('path')
var app = express();        
app.use(favicon(path.join(__dirname,'public','img','favicon.ico')));

var bodyParser= require('body-parser')
var sslRedirect = require('heroku-ssl-redirect');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))

// enable ssl redirect
app.use(sslRedirect());
app.use(compression())

app.use('/public', express.static(path.join(__dirname + "/public")));
app.use('/vendor', express.static(path.join(__dirname + "/vendor")));

app.listen(port);
console.log('Magic happens on port ' + port);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

