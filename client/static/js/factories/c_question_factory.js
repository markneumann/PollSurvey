console.log('loading question_factory');
// // create the QuestionsFactory
// console.log('MEANModule',MEANModule);
MEANModule.factory('QuestionFactory', function($http) {
    console.log('top of QuestionFactory');
    var factory = {};
    var questions = [];
    factory.index = function(callback) {
        console.log("questions factory.index");
        // Where do we get access to $http?
        $http.get('/questions')
        .then(function(output) {
            questions = output.data;
            console.log("output =", output.data);
            callback(questions);
        })
        .catch (function(err) {
            console.log("err =", err );
            callback(err);
        });
    };
//
    factory.create = function(data, callback, forErrors) {
        console.log("factory.new data:", data);
        console.log('the question name', data);
        $http.post('/questions',data)
        .then(function(output) {
            console.log("get /new response: ", output.data);
            callback(output.data);
        })
        .catch (forErrors);
    };

//     factory.remove = function(data, callback) {
//         console.log("factory.remove data:", data);
//         $http.get('/questions/remove/' + data)
//         .then(function() {
//             console.log("remove response");
//             callback();
//         })
//         .catch (function(err){
//             console.log("err =", err );
//         });
//     };
//
     return factory;
});
