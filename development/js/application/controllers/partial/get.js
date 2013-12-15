define(['angular'],
function (angular) {
    return ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.$apply();
    }];
});



        // <script type="text/javascript">
        //     $("#getVersion").submit(function(e) {
        //         e.preventDefault();
        //         console.log('e', e);
        //         var $form = $(this);
        //         formappid = $form.find("input[name = 'getappid']").val();

        //           document.getElementById('getversion').value = null;
        //                 document.getElementById('getcreateddate').value = null;


        //         $.ajax({
        //             url: 'http://goserverdev.cloudapp.net:3400/appversion/' + formappid + '/',
        //             type: 'GET',
        //             //    data: formappid,
        //             contentType: 'text/plain',
        //             dataType: 'json',
        //             success: function(json) {
        //                 console.log(JSON.stringify(json));
        //                 versionData = JSON.parse(JSON.stringify(json));

        //                 document.getElementById('getappid').value = versionData.appid;
        //                 document.getElementById('getversion').value = versionData.appversion;
        //                 document.getElementById('getcreateddate').value = versionData.createddate;
        //             },
        //             statusCode: {
        //                 404: function() {
        //                     alert( "page not found");
        //                 }
        //             },
        //             statusCode: {
        //                 500: function() {
        //                     alert( "Internal server error");
        //                 }
        //             }


        //         });

        //     })
        // </script>