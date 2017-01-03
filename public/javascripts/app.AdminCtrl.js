angular.module('pottyCheck')
    .controller('AdminCtrl', function ($scope, $http, $rootScope) {
        $scope.messages = [
            'please fill out all (to Register) fields',
            'thanks for your for registering.'
        ];
        $scope.message = $scope.messages[0];

        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://138.197.68.12/api/account',
                method: 'POST',
                params: {username: username, email: email, password: password}
            }).success(function (results) {
                $scope.message = scope.message[1];
            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };

    });

    //same as register controller