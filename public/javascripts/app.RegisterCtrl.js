angular.module('pottyCheck')
    .controller('RegisterCtrl', function ($scope, $http, $location, $rootScope) {

        $scope.goToHome = function() {
            $location.path('/home');
        }

        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://138.197.68.12/api/account/',
                method: 'POST',
                params: {
                    username: username, 
                    email: email, 
                    password: password }
            }).success(function (results) {
                console.log(results)
                // $rootScope

                // THIS WILL DISPLAY MESSAGE FROM SERVER SIDE INTO MESSAGE FIELD IN HTML WHEN 
                // 1) USER ENTERS A USERNAME THAT HAS ALREADY BEEN TAKEN, 2) THEY'VE SUCCESSFULLY REGISTERED A NEW ACCOUNT
                // if (results.message == "An account with that username already exists. Please choose a new username.") {
                //     $scope.message = results.message;
                // }
                // else {
                //     $rootScope.api_key = results.api_key;
                //     $scope.message = results.message;  // MESSAGE FOR NEW USER. NOT DISPLAYED SINCE WE REDIRECT
                //     $scope.goToHome(); // UPON SUCCESSFUL REGISTRATION, REDIRECTS TO HOME PAGE
                // }   


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
                    //$scope.goToHome();
                    console.log(results)
                    return ($rootScope.api_key, $rootScope.user_submission);

                }


            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to register user.');
                console.log(err);
            });
        };
    });