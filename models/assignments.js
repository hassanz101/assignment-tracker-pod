//requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//creating schema
var ourSchema = mongoose.Schema({
  assignment: String,
  student: String,
  score: Number,
  date:{ type: Date, default: Date.now }
});

//make schema collection
var ourAssignments = mongoose.model('ourAssignments', ourSchema);


module.exports = ourAssignments;
