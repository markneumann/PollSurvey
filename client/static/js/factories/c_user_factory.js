console.log('loading user_factory');
// // create the UserFactory

MEANModule.factory('UserFactory', function($http) {

    var factory = {};
    var tests = [];

//
    factory.login = function(data, callback) {
        console.log("factory.login data:", data);
        console.log('the login name', data.name);
        // data.name = data.name;
        console.log('revised data = ', data);
        $http.post('/users', data)
            .then(function(output) {
                console.log("post /users response: ", output.data);
                callback(output.data);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

    return factory;
});
