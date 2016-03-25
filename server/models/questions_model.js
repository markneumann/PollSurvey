//basic model
console.log("loading questions_model");
var mongoose = require('mongoose');
//
var QuestionSchema = new mongoose.Schema({
    //define schema here
    // could add a submitted by if there is time
    question: String,
    answer: String,
    fake1: String,
    fake2: String
       }
);

// could add validations to require some text if there is time
mongoose.model('questions', QuestionSchema);

console.log("exit question_model");
