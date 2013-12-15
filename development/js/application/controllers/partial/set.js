define(['angular'],
function (angular) {
    return ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.$apply();
    }];
});

        // <script type="text/javascript">
        //     $("#setVersion").submit(function(e) {
        //         e.preventDefault();
        //         console.log('e', e);
        //         var $form = $(this);
        //         formappid = $form.find("input[name = 'appid']").val();
        //         formversion = $form.find("input[name = 'version']").val();

        //         console.log('hello world');


        //         var arr = {
        //             appid: formappid,
        //             appversion: formversion
        //         };

        //         //console.log(JSON.stringify(arr));

        //         $.ajax({
        //             url: 'http://goserverdev.cloudapp.net:3400/appversion/',
        //             type: 'POST',
        //             data: JSON.stringify(arr),
        //             contentType: 'text/plain'
        //         });

        //     })
        // </script>