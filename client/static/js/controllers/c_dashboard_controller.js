console.log('loading dashboard_controller');
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController', function($scope, PollFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.polls array

    console.log('top of dashboard controller');
    // Show current polls
    PollFactory.index(function(data) {
        console.log("PollFactory.index");
        $scope.polls = data;
        console.log("$scope.polls =", $scope.polls);
    });
    //console.log('return from PollFactory');

//     $scope.addpoll = function() {
//         // note the use of callbacks here
//         PollFactory.create($scope.new_poll, function(theOutput) {
//             console.log("new poll =", $scope.new_poll);
//             console.log('returned poll', theOutput);
//             $scope.polls.push(theOutput);
//             $scope.new_poll = {};
//             console.log('new $scope.polls ', $scope.polls);
//         });
//     };
//
//     $scope.removepoll = function(poll) {
//         var removeThisPoll =$scope.polls.indexOf(poll);
//         console.log('removepoll: ', removeThisPoll);
//         console.log('$scope.polls = ', $scope.polls);
//         console.log('remove_id: ', $scope.polls[removeThisPoll]._id);
//         if(~removeThisPoll){
//             var remove_id = $scope.polls[removeThisPoll]._id;
//             // note the use of callbacks here
//             PollFactory.remove(remove_id, function() {
//                 console.log("remove poll =", removeThisPoll);
//                 $scope.polls.splice(removeThisPoll,1);
//             });
//         }
//     };
//
});
