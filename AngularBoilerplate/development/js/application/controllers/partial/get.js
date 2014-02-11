define(['angular'],
function (angular) {
    return ['$scope', 'VersionServiceProvider', '$rootScope', function($scope, VersionServiceProvider, $rootScope) {

        $scope.getAppId = function () {
            VersionServiceProvider
                .get({'id' : $scope.appid})
                .success(function(response) {
                    console.log('response', response);
                    $scope.version = response.version;
                    $scope.created = response.created;
                })
                .error(function () {
                    $scope.error = 'Request error';
                });
        };

        $scope.$apply();
    }];
});