console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
var Question = require('../controller/questions_controller.js');
var Tests = require('../controller/tests_controller.js');

module.exports = function(app){
    app.get('/tests', Tests.index);  //Return the list of completed tests for the dashboard
    // app.post('/tests', Tests.new_test); //Save test results from one test from the test partial
    // //app.post('/tests/edit/:id, Order.edit_order');
    // // // app.get('/orders/remove/:id', Order.remove_order);
    // // // app.get('/orders/show/:id', Order.show_order);
    app.get('/questions', Question.index); // Return 3 questions (random), with answers, etc.. for test partial
    app.post('/questions', Question.new_question);  // Create a new question submitted fro question partial
    // //app.get('/customers/remove/:id', Customer.remove_customer);
    // // app.get('/customers     /show/:id', Customer.show_customer);
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
