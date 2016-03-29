console.log("loading questions_controller");
var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> questions index path");
            Question.find()
            .then(function(results){
                    res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_question: function(req, res) {
            console.log("--> new question path");
            console.log("req.body =", req.body);
            var newQuestion = new Question({
                question: req.body.question,
                option1:  req.body.option1,
                option2:  req.body.option2,
                option3:  req.body.option3,
                option4:  req.body.option4
            });
            newQuestion.save()
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json(newQuestion);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

//
//         edit_question: function(req, res) {
//             console.log("--> edit question path");
//             console.log("req.body =", req.body);
//             // var editQuestion = new Question({
//             //     name: req.body.name,
//             //     product:  req.body.product,
//             //     quantity: req.body.quantity
//             // });
//             questions.findByIdAndUpdate(req.params.id, {set: req.body})
//             .then(function() {
//                 console.log("return 200");
//                 res.status(200); // send back http 200 status if successful
//                 res.json({success:'true'});
//             })
//             .catch (function(err){
//                 console.log(err);
//                 res.status(500); // send back http 200 status if successful
//                 res.json({error: err});
//             });
//         },
//
//         // remove_question:  function(req, res){
//         //     console.log("--> remove question path");
//         //     console.log(req.params);
//         //     Question.remove({_id: req.params.id}, function(err, questions) {
//         //         if(err) {
//         //             console.log(err);
//         //             //res.render('errors', {title: 'you have errors!', errors: name.errors});
//         //         } else {
//         //             res.redirect('/questions');
//         //         }
//         //     });
//         // },
//
//         // NOT NEEDED AT THIS TIME
//         // show_name:  function(req, res){
//         //     console.log("--> show path");
//         //     console.log(req.params);
//         //     Name.find({_id: req.params.id}, function(err, customers) {
//         //         if(err) {
//         //             console.log(err);
//         //             res.render('errors', {title: 'you have errors!', errors: name.errors});
//         //         } else {
//         //             res.json({names: names}); //<-- think we change this
//         //         }
//         //     });
//         // },
    };
})(); //returns object
