console.log('loading poll_controller');
// //
MEANModule.controller('PollController', function($scope, $location, QuestionFactory, PollFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    $scope.errorArea = {};

    console.log('top of PollController');
    // Create a poll
    // Fetch the question data into the scope

    PollFactory.create = function(question) {
        console.log('calling createPoll');
        poll.name = {'name': UserFactory.getUser().name};
        poll.question = {'question': question};
        PollFactory.create(results,
            function(theOutput) {
                console.log('returned from factory', theOutput);
                //nothing to do here except move to the next step.
            },
            forErrors
        );
    };  // end createPoll
    // QuestionFactory.show(req.params.id, function(database) {
    //     console.log('returning question from factory');
    //     $scope.question = data;
    // )};

        // Create the new poll record
    $scope.submit_poll = function(optionNumber) {
        console.log('submit_poll event');
        //var new_count += $scope.optionNumber;
        PollFactory.create($scope.new_poll, function(theOutput) {
            console.log("new poll =", $scope.new_poll);
            console.log('returned poll', theOutput);
        });
    };

//
    function forErrors(output) {
        console.log('catch --->', output);
        if(output.data.error){  //handle other errors
            //console.log('error = ', output.data.error);
            console.log('error errmsg = ', output.data.error.errmsg);
            $scope.errorArea.errmsg = output.data.error.errmsg;
        }
        if(output.data.errmsg){   //handle not unique
            console.log('errmsg = ', output.data.errmsg);
            $scope.errorArea.errmsg = output.data.error;

        }
    }
//
});
