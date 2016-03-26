console.log('loading question_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('QuestionController', function($scope, QuestionFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.questions array
    console.log('top of question controller');
    // QuestionFactory.index(function(data) {
    //     console.log("QuestionFactory.index");
    //     $scope.questions = data;
    //     console.log("$scope.questions =", $scope.questions);
    //     // anything else that you want to happen after storing questions to $scope
    // });
    // console.log('return from QuestionFactory');
//
    $scope.addquestion = function() {
        // note the use of callbacks here
        QuestionFactory.create($scope.new_question, function(theOutput) {
            console.log("new question =", $scope.new_question);
            console.log('returned question', theOutput);
            $scope.questions.push(theOutput);
            $scope.new_question = {};
            console.log('new $scope.questions ', $scope.questions);
        });
    };
//
//     $scope.removequestion = function(question) {
//         var removeThisQuestion =$scope.questions.indexOf(question);
//         console.log('removequestion: ', removeThisQuestion);
//         console.log('$scope.questions = ', $scope.questions);
//         console.log('remove_id: ', $scope.questions[removeThisQuestion]._id);
//         if(~removeThisQuestion){
//             var remove_id = $scope.questions[removeThisQuestion]._id;
//             // note the use of callbacks here
//             QuestionFactory.remove(remove_id, function() {
//                 console.log("remove question =", removeThisQuestion);
//                 $scope.questions.splice(removeThisQuestion,1);
//             });
//         }
//     };
//
});
