console.log('loading app.js');
// Let's create our angular module
var MEANModule = angular.module('MEAN_app', ['ngRoute']);

// the .controller() method adds a controller to the module
OCModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/dashboard.html'
    })
    .when('/test', {
        templateUrl: '/partials/test.html'
    })
    .when('/question', {
        templateUrl: '/partials/question.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
