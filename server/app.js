var express = require('express');
var app = express();

var handler = require('./request-handler');
var router = require('./routes'); // ## .js?

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);