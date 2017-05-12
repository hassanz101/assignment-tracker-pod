// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//this is the MODEL for the database  ->used to find and create new assignments below
var assignments = require('./models/assignments');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json() );

//creates the database
mongoose.connect('localhost:27017/assignments');

//creates the port for the server
var port = process.env.Port || 5050;

//creates a new assignment in the database
//serverside post call- match to post http function on client
app.post('/assignments', function(req, res){
  // console.log('req.body.name:', req.body.name);
  var NewAssignments = assignments(req.body);
  NewAssignments.save().then(function(){
    res.sendStatus(200);
  });

});

//get call for getting all the assignments from the db and sends to client
app.get('/assignments', function(req, res){
  console.log('in get assignments');
  assignments.find().then(function(data){
    res.send(data);
  });
});

//base url get function
app.get('/', function(req, res){
  console.log('base url hit', path.resolve ('public/views/index.html'));
  res.sendFile(path.resolve('public/views/index.html'));
});


//spins up server
app.listen(port, function(){
  console.log('listening on 5050 ->', port);
});
