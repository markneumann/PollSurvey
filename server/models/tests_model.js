//basic model
console.log("loading test_model");
var mongoose = require('mongoose');
//
var TestSchema = new mongoose.Schema({
    //define schema here
    name: String,
    score: Number
});

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('tests', TestSchema);

console.log("exit test_models");
