console.log("loading test_controller");
var mongoose = require('mongoose');
var Test = mongoose.model('tests');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> tests index path");
            Test.find()
            .then(function(results){

                // console.log('results=',results);
                res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_test: function(req, res) {
            console.log("--> new test via Post path");
            var newTest = new Test({
                name: req.body.name,
                score: req.body.score
            });
            newTest.save()
            .then(function() {
                console.log("return 200", newTest);
                res.status(200); // send back http 200 status if successful
                res.json(newTest);
                // res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        // remove_test:  function(req, res){
        //     console.log("--> remove test path");
        //     console.log(req.params);
        //     Test.remove({_id: req.params.id})
        //     .then(function() {
        //         console.log("return 200");
        //         res.status(200); // send back http 200 status if successful
        //         res.json({success: true});
        //     })
        //     .catch (function(err){
        //         console.log(err);
        //         res.status(500); // send back http 200 status if successful
        //         res.json({error: err});
        //     });
        // },

        // NOT NEEDED AT THIS TIME
        // show_name:  function(req, res){
        //     console.log("--> show path");
        //     console.log(req.params);
        //     Name.find({_id: req.params.id}, function(err, tests) {
        //         if(err) {
        //             console.log(err);
        //             res.render('errors', {title: 'you have errors!', errors: name.errors});
        //         } else {
        //             res.json({names: names}); //<-- think we change this
        //         }
        //     });
        // },
    };
})(); //returns object
