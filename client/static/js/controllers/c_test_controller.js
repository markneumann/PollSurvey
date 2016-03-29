console.log('loading test_controller');
// //
MEANModule.controller('TestController',
    function($scope, $location, QuestionFactory, TestFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    $scope.errorArea = {};


    console.log('top of TestController');
    QuestionFactory.index(function(data) {
        console.log("QuestionFactory.index", data);
        $scope.questions = {};
        var qnumber = data.length;
        var arr = [];
        console.log('length = ', qnumber);
        while (arr.length < 3) {
            var selector = Math.floor((Math.random()*qnumber));
            var found = false;
            console.log('selector =', selector);
            for (var i=0; i<arr.length; i++){
                if(arr[i]==selector) {
                    found=true;
                    break;
                }
            }
            if(!found) arr[arr.length]=selector;
        }
        // console.log('arr= ', arr);
        // console.log('1 = ',data[arr[0]]);
        // console.log('2 = ',data[arr[1]]);
        // console.log('3 = ',data[arr[2]]);

        $scope.questions[0] = data[arr[0]];
        $scope.questions[1] = data[arr[1]];
        $scope.questions[2] = data[arr[2]];
        // $scope.question.firstanswer = {};
        // $scope.question.secondanswer = {};
        // $scope.question.thirdanswer = {};
        console.log("$scope.questions =", $scope.questions);
        // anything else that you want to happen after storing tests to $scope
    });

    $scope.submitTest = function() {
        // First make sure that all of the questions were answered.
        // console.log('q1 ans = ', $scope.question.firstanswer);
        // console.log('q2 ans = ', $scope.question.secondanswer);
        // console.log('q3 ans = ', $scope.question.thirdanswer);
        if($scope.question.firstanswer === undefined ||
           $scope.question.secondanswer === undefined ||
           $scope.question.thirdanswer === undefined ) {
           $scope.errorArea = {'errmsg': 'You must answer all questions!'};
        } else {
            // we calcuate the score
            var correct = 0;
            if($scope.question.firstanswer === $scope.questions[0].answer) correct++;
            if($scope.question.secondanswer === $scope.questions[1].answer) correct++;
            if($scope.question.thirdanswer === $scope.questions[2].answer) correct++;
            console.log('correct =', correct);
            // Build the Test object
            var results = {};
            console.log('currentUser =', UserFactory.getUser().name);
            results.name = {'name': UserFactory.getUser().name};
            results.score = {'score': correct};
            TestFactory.setLastScore({'score' : correct});
            //console.log('results = ', results);
            // To Do:
            // 5. May need new partial on dashboard to highlight user score
            TestFactory.create(results,
                function(theOutput) {
                    // console.log('returned from factory', theOutput);
                    $scope.lastScore = TestFactory.getLastScore();
                    console.log('getLastScore =', $scope.lastScore);
                    $location.url('/');
                },
                forErrors
            );

        }  //end else

};  // end submitTest

//
//     $scope.removetest = function(test) {
//         var removeThisTest =$scope.tests.indexOf(test);
//         console.log('removetest: ', removeThisTest);
//         console.log('$scope.tests = ', $scope.tests);
//         console.log('remove_id: ', $scope.tests[removeThisTest]._id);
//         if(~removeThisTest){
//             var remove_id = $scope.tests[removeThisTest]._id;
//             // note the use of callbacks here
//             TestFactory.remove(remove_id, function() {
//                 console.log("remove test =", removeThisTest);
//                 $scope.tests.splice(removeThisTest,1);
//             });
//         }
//     };
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
