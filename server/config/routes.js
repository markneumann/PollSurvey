console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
var Question = require('../controller/questions_controller.js');
var Tests = require('../controller/tests_controller.js');
var Users = require('../controller/users_controller.js');

module.exports = function(app){
    app.get('/tests', Tests.index);  //Return the list of completed tests for the dashboard
    app.post('/tests', Tests.new_test); //Save test results from one test from the test partial
    // //app.post('/tests/edit/:id, Test.edit_test');
    // // // app.get('/tests/remove/:id', Test.remove_test);
    // // // app.get('/tests/show/:id', Test.show_test);
    app.get('/questions', Question.index); // Return 3 questions (random), with answers, etc.. for test partial
    app.post('/questions', Question.new_question);  // Create a new question submitted fro question partial
    // //app.get('/questions/remove/:id', Question.remove_question);
    // // app.get('/questions/show/:id', Question.show_question);
    app.post('/users', Users.login);  // Login the user, creating a new one if needed
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
