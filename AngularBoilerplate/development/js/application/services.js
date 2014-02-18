define(['angular', 'app/services/auth', 'mocks'],
function (angular) {
	'use strict';
	
    /* Services */

    return angular.module('services', ['AuthService', 'Mock', 'ENVIRONMENT'])
        .value('version', '0.1')
        .factory('RestFormData', function () {
            return {
                getForm : function () {
                    return [

                        {
                            name : "name",
                            type : "text",
                            placeholder : "First name",
                            validate : {
                                pattern : /[a-zA-Z0-9]/,
                                required : true
                            }
                        },
//                        {
//                            name : "rag",
//                            type : "select",
//                            label : "status",
//                            values : ['red', 'amber', 'green'],
//                            validate : {
//                                required : true
//                            }
//                        },
                        {
                            name : "password",
                            type : "password",
                            placeholder : "password",
                            validate : {
                                pattern : /^[a-z0-9 ,.'-]+$/i,
                                required : true
                            }
                        },
                        {
                            name : "email",
                            type : "text",
                            placeholder : "email",
                            validate : {
                                pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                required : false
                            }
                        }
                    ]
                }
            }
        });

});
