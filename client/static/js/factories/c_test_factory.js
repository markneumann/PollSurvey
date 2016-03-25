console.log('loading test_factory');
// // create the TestFactory
MEANModule.factory('TestFactory', function($http) {
    var factory = {};
    var tests = [];

    factory.index = function(callback) {
        console.log("factory.index");
        // Where do we get access to $http?
        $http.get('/tests')
            .then(function(output) {
                tests = output.data;
                console.log("output =", output.data);
                callback(tests);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

//     //have to add a second factory to get the list of customers for the pulld
//     factory.customer_index = function(callback) {
//         console.log("customerfactory.index from tests");
//         // Where do we get access to $http?
//         $http.get('/customers')
//             .then(function(output) {
//                 test_customers = output.data;
//                 console.log("output =", output.data);
//                 callback(test_customers);
//             })
//             .catch(function(err) {
//                 console.log("err =", err);
//             });
//     };
//
//     factory.create = function(data, callback) {
//         console.log("factory.new data:", data);
//         console.log('the test name', data.name.name);
//         data.name = data.name.name;
//         console.log('revised data = ', data);
//         $http.post('/tests', data)
//             .then(function(output) {
//                 console.log("post /tests response: ", output.data);
//                 callback(output.data);
//             })
//             .catch(function(err) {
//                 console.log("err =", err);
//             });
//     };
//
//     // factory.remove = function(data, callback) {
//     //     console.log("factory.remove data:", data);
//     //     $http.get('/cusomter/remove/' + data)
//     //     .then(function() {
//     //         console.log("remove response");
//     //         callback();
//     //     })
//     //     .catch (function(err){
//     //         console.log("err =", err );
//     //     });
//     // };
//
    return factory;
});
