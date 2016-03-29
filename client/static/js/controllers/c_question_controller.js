console.log('loading question_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('QuestionController', function($scope, $question, QuestionFactory) {
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
        QuestionFactory.create($scope.new_q, function(theOutput) {
            console.log("new q =", $scope.new_q);
            console.log('returned question', theOutput);
            $location.url('/');
        });
    };
//

//
});
