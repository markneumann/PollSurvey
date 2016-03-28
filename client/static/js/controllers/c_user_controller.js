console.log('loading user_controller');
// // Now let's create a controller with some hardcoded data!
MEANModule.controller('UserController', function($scope, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.questions array
    console.log('top of user controller');

    $scope.login = function() {
        // note the use of callbacks here
        UserFactory.login($scope.user, function(theOutput) {
            console.log("user", $scope.user);
            console.log('returned user', theOutput.name);
            console.log($scope);
        });
    };

    $scope.play = function() {
        // note the use of callbacks here
        console.log('Play clicked for ');
        $scope = $scope || angular.element(document).scope();
        if($scope.$$phase){
            window.location = ('#/test');
        } else {
            $location.path('#/test');
            $scope.$apply();
        }
    };

});
