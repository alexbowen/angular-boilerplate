define(['angular'],
function (angular) {
    return ['$scope', 'VersionServiceProvider', '$rootScope', function($scope, VersionServiceProvider, $rootScope) {

        $scope.getAppId = function () {
            VersionServiceProvider
                .set({'id' : $scope.appid, 'version' : version})
                .success(function(response) {
                    console.log('response', response);

                })
                .error(function () {
                    $scope.error = 'Request error';
                });
        }

        $scope.$apply();
    }];
});