/*jslint devel: true, node: true, eqeq: true, nomen: true, plusplus: true, regexp: true, sloppy: true, vars: true*/
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleWare = require('./middleware.js');

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server started. Listening on port ' + PORT + '.');
});