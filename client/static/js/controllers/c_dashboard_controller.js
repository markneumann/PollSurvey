console.log('loading dashboard_controller');
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController', function($scope, TestFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.tests array

    console.log('top of dashboard controller');
    TestFactory.index(function(data) {
        console.log("TestFactory.index");
        $scope.tests = data;
        console.log("$scope.tests =", $scope.tests);
        // anything else that you want to happen after storing tests to $scope
    });
    console.log('return from TestFactory');

//     $scope.addtest = function() {
//         // note the use of callbacks here
//         TestFactory.create($scope.new_test, function(theOutput) {
//             console.log("new test =", $scope.new_test);
//             console.log('returned test', theOutput);
//             $scope.tests.push(theOutput);
//             $scope.new_test = {};
//             console.log('new $scope.tests ', $scope.tests);
//         });
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
});
