angular.module('pottyCheck')
    .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {

        $scope.goToHome = function() {
            $location.path('/home');
        }

        $scope.loginAccount = function(username, email, password) {
            $http({
                url: 'http://138.197.68.12/api/account/login',
                method: 'post',
                params: {
                    username: username, 
                    password: password,
                }
            }).success(function (results) {
                // if (results.status) {
                if (results.status == 403) {
                    //problem, check for 403
                    $scope.message = results.message; // RENDERS MESSAGE INDICATING INCORRECT LOGIN CREDENTIALS
                    // console.log(results)
                    // console.log($rootScope.api_key)
                } else {
                    $scope.message = results.message;
                    // $rootScope.api_key = results.api_key;
                    // console.log($rootScope.api_key)
                    $rootScope.api_key = results.api_key;
                    $rootScope.user_submission = results.username;
                    // console.log($rootScope.api_key)
                    console.log(results)
                    // console.log($rootScope.api_key)
                    //$scope.goToHome();
                    return ($rootScope.api_key, $rootScope.user_submission);

                }
            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to login user.');
                console.log(err);
                $state.go('login')
            });
        };


        // LOGOUT NEEDS WORK - - - - - - - - - - - - - - - - - - - - - - - -
        $scope.logOutAccount = function(username, email, password) {

            $rootScope.api_key = '' ;
            $rootScope.username = '' ;

            return ($rootScope.api_key, $rootScope.user_submission);

        };
        // LOGOUT NEEDS WORK - - - - - - - - - - - - - - - - - - - - - - - -

    });