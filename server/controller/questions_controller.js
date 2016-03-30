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
                name:     req.body.name,
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

        show_question:  function(req, res){
            console.log("--> show path");
            //console.log(req.params);
            the_id = {_id: req.params.id };
            console.log('the_id =', the_id);
            Question.findOne(the_id, function(err, question) {
                if(err) {
                    console.log(err);
                    //res.render('errors', {title: 'you have errors!', errors: question.err});
                } else {
                    res.json(question); //<-- think we change this
                }
            });
        },
        //
        edit_question: function(req, res) {
            console.log("--> edit question path");
            console.log("req.body =", req.body);
            var q_id = {_id: req.body.q_id};
            var updateStr = '{$inc : {"option'+req.body.opt_num+'count" : 1}}';
            var update ={};
            //update = {$inc : {'option'+req.body.opt_num+'count' : 1 }};
            console.log('update =', update);
            console.log('updateStr =', updateStr);
            console.log('q_id = ',q_id);
            // this find seems to work okay with the given q_id
            // Question.findOne(q_id, function(err, output) {
            //     if(err) {
            //         console.log(err);
            //         //res.render('errors', {title: 'you have errors!', errors: question.err});
            //     } else {
            //         console.log('found this',output);
            //     }
            // });
            //  and this returns 100, but doesn't seem to increment anything
            //Question.findByIdAndUpdate(q_id,updateStr)
            Question.findByIdAndUpdate(q_id,{$inc : {"option'+req.body.opt_num+'count" : 1}})
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success:'true'});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },
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

    };
})(); //returns object
