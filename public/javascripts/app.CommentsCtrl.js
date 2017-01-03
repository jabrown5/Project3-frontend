angular.module('pottyCheck')
    .controller('CommentsCtrl', function ($scope, $http, $rootScope) {

        $scope.createComment = function(publicly_accessible, cleanliness, family_friendly, gender, pictures, comment, user_submission, date, tags, restroom_id, api_key) {

            var api_key = $rootScope.api_key;

            $http({
                url: 'http://138.197.68.12/api/comment',
                method: 'POST',
                params: {
                    publicly_accessible: publicly_accessible, 
                    cleanliness: cleanliness, 
                    family_friendly: family_friendly, 
                    gender: gender, 
                    comment, comment,
                    pictures: pictures, 
                    user_submission: user_submission, 
                    date: date, 
                    tags: tags,
                    restroom_id: restroom_id,
                    api_key: api_key
                }
            }).success(function (results) {
                $scope.message = results.message; // RENDERS MESSAGE INDICATING CORRECT/INCORRECT LOGIN CREDENTIALS
            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };

    });