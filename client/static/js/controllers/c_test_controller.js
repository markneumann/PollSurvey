console.log('loading test_controller');
// //
MEANModule.controller('TestController', function($scope, QuestionFactory, TestFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    //scope.errorArea = {};
    console.log('top of TestController');
    QuestionFactory.index(function(data) {
        console.log("QuestionFactory.index", data);
        console.log('data =', data);
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
        console.log('arr= ', arr);
        console.log('1 = ',data[arr[0]]);
        console.log('2 = ',data[arr[1]]);
        console.log('3 = ',data[arr[2]]);

        $scope.questions[0] = data[arr[0]];
        $scope.questions[1] = data[arr[1]];
        $scope.questions[2] = data[arr[2]];
        console.log("$scope.questions =", $scope.questions);
        // anything else that you want to happen after storing tests to $scope
    });

//     $scope.addtest = function() {
//         // note the use of callbacks here
//         TestFactory.create($scope.new_test,
//             function(theOutput) {
//                 console.log("new test =", $scope.new_test);
//                 console.log('returned test', theOutput);
//                 $scope.tests.push(theOutput);
//                 $scope.new_test = {};
//                 console.log('new $scope.tests ', $scope.tests);
//             },
//             forErrors
//         )
//     };
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
//     function forErrors(output) {
//         console.log('catch --->', output);
//         if(output.data.error){  //handle other errors
//             //console.log('error = ', output.data.error);
//             console.log('error errmsg = ', output.data.error.errmsg);
//             $scope.errorArea.errmsg = output.data.error.errmsg;
//         }
//         if(output.data.errmsg){   //handle not unique
//             console.log('errmsg = ', output.data.errmsg);
//             $scope.errorArea.errmsg = output.data.error;
//
//         }
//     }
//
});
