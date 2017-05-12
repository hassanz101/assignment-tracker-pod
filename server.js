// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json() );

// mongoose.connect('localhost:27017/asignments');



var port = process.env.Port || 5050;

app.post('/assignments', function(req, res){
  console.log('req.body.name:', req.body.name);
});

app.get('/', function(req, res){
  console.log('base url hit', path.resolve ('public/views/index.html'));
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(port, function(){
  console.log('listening on 5050 ->', port);
});
