console.log('loading question_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('QuestionController', function($scope, $question, QuestionFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.questions array
    console.log('top of question controller');

    $scope.addquestion = function() {
        //
        QuestionFactory.create($scope.new_q, function(theOutput) {
            console.log("new q =", $scope.new_q);
            console.log('returned question', theOutput);
            $location.url('/');
        });
    };


//
});
