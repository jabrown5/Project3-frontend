// angular.module('pottyCheck')
//     .controller('HomeCtrl', function($scope, $http, $rootScope) {

//         $scope.posts = [];

//         $scope.fetch = function() {
//             $http.get('http://localhost:9292/api/restroom/').success(function (results) {
//             // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {
//                 $scope.posts = results
//                 console.log($scope.posts)
//             }).error(function(err) {
//                 console.log('Fetch failed; it didn\'t happen');
//                 console.log(err);
//             });
//         }
//         $scope.fetch();
//     });

angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope) {

        posts = [] ;
        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://138.197.68.12/api/restroom/').success(function (results) {
            // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {

                for (i in results) {

                    // posts.push({locationname: results[i].facility_name , geolocation: {lat: results[i].longitude , lng: results[i].latitude }, comments: results[i].cleanliness});
                    $scope.posts.push({locationname: results[i].facility_name , geolocation: {lat: parseFloat(results[i].longitude) , lng: parseFloat(results[i].latitude) }, comments: results[i].cleanliness});

                    //console.log($scope.posts);

                    //$scope.posts = posts ;
                    //return $scope.posts;
                }

                return $scope.posts;


            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });

            console.log($scope.posts);
        }

        $scope.fetch();

    });




