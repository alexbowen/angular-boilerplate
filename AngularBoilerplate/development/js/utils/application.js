define([], function () {

    'use strict';

    return {
        validatePassword : function (password) {

            var pattern = /^(?=.*\d)(?=.*[A-Z]).{8,32}$/;

            if (pattern.test(password)) {
                if (password.length >= 8 && password.length <= 32) {
                    return true;
                }
            }

            return false;
        }
    };
});