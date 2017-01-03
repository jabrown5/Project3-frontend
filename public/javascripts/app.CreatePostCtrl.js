angular.module('pottyCheck')
    .controller('CreatePostCtrl', function ($scope, $http, $rootScope) {

        $scope.createPost = function(facility_name, address, publicly_accessible, cleanliness, family_friendly, gender, latitude, longitude, api_key, user_submission) {

            // CODING HELP FOUND AT: 
            // http://stackoverflow.com/questions/39107643/angularjs-form-input-with-google-places-api-not-saving-full-string
            var address = document.getElementById('autocomplete').value; 
            var latitude = document.getElementById('lat').value;
            var longitude = document.getElementById('lng').value;

            var api_key = $rootScope.api_key;
            var user_submission = $rootScope.user_submission;

            $http({
                url: 'http://138.197.68.12/api/restroom/',
                method: 'POST',
                params: {
                    facility_name: facility_name, 
                    address: address, 
                    publicly_accessible: publicly_accessible, 
                    cleanliness: cleanliness, 
                    family_friendly: family_friendly, 
                    gender: gender,
                    latitude: latitude,
                    longitude: longitude,
                    api_key: api_key,
                    user_submission: user_submission
                }
            }).success(function (results) {
                $scope.message = results.message; // RENDERS MESSAGE INDICATING INCORRECT LOGIN CREDENTIALS
                console.log($scope.message)
                console.log(results)

            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };
    });



    // angular.module('pottyCheck')
    // .controller('CreatePostCtrl', function ($scope, $http) {
    //     $scope.messages = [
    //         'please fill out all fields',
    //         'thanks for your post. view the blog to see it live'
    //     ];
    //     $scope.message = $scope.messages[0];
    //     $scope.createPost = function(facility_name, address, latitude, longitude, publicly_accessible, cleanliness, family_friendly, gender, user_submission) {
    //         $http({
    //             url: 'http://localhost:9292/api/restroom/',
    //             method: 'POST',
    //             params: {
    //                 facility_name: facility_name, 
    //                 address: address, 
    //                 latitude: latitude,
    //                 longitude: longitude,
    //                 publicly_accessible: publicly_accessible, 
    //                 cleanliness: cleanliness, 
    //                 family_friendly: family_friendly, 
    //                 gender: gender,
    //                 user_submission: user_submission}
    //         }).success(function (results) {
    //             $scope.message = $scope.message[1];
    //         }).error(function (err) {
    //             console.log('ajax use go down hole--ERROR');
    //             console.log(err);
    //         });
    //     };

    // });