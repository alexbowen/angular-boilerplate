define(['angular', 'app/services', 'app/controllers'], function (angular, services, controllers) {
	'use strict';
    /* Directives */

	return angular.module('directives', ['services', 'controllers'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}])
	.directive('login', function() {
		return {
			restrict: 'E',
            controller: 'LoginController',
			templateUrl: 'js/application/view/partial/login.tpl',
			link: function(scope, element, attrs) {

			}
		};
	})
    .directive('restForm', function(RestFormData) {
        return {
            restrict: 'A',
            //controller: 'LoginController',
            template:
                '<form name="myForm" ng-controller="FormController"><ul>' +
                '<li ng-repeat="field in fields">' +
                '<label ng-bind="field.label || field.name">' +
                '</label>' +
                '<input name="{{field.name}}" ng-model="name" type="{{field.type}}" placeholder="{{field.placeholder}}" required>' +
                '<span class="error" ng-show="myForm[{{field.name}}].$error.required">Required!</span>' +
                '<p>myForm.input.$error = {{myForm.name.$error}}</p>' +
                '</li>' +
                '</ul></form>',
//
//                '<form name="myForm" ng-controller="FormController">' +
//                'userType: <input name="input" ng-model="userType" required>' +
//                '<span class="error" ng-show="myForm.input.$error.required">Required!</span><br>' +
//                '<tt>userType = {{userType}}</tt><br>' +
//                '<tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br>' +
//                '<tt>myForm.input.$error = {{myForm.input.$error}}</tt><br>' +
//                '<tt>myForm.$valid = {{myForm.$valid}}</tt><br>' +
//                '<tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>' +
//                '</form>',
            link: function(scope, element, attrs) {
                scope.fields = RestFormData.getForm();

                console.log('form', RestFormData.getForm());
                console.log('link', scope, element, attrs);
            }
        };
    });
});
