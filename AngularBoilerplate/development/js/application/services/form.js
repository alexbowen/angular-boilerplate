define(['angular'], function (angular) {

    'use strict';

    return angular.module('RestFormService', [])
        .factory('RestFormServiceProvider', function () {
              return {
                  getForm : function () {
                      return {
                          "Id": "52b0506fcee2d41d090000bb",
                          "name": "Application 1",
                          "rag": "RED",
                          "comment": "This App is down.",
                          "message": "Its all gone pete tong",
                          "datecreated": "2014-01-04T14:11:47.167Z"
                      }
                  }
              }
        });
});