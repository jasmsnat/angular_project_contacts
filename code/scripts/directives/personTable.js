'use strict';
angular.module("appContacts")
    .directive("personTable", function() {
       return {
           restrict: "EAC",
           controller: 'personCtrl',
           templateUrl: "/code/views/personTable.html",
       }; 
    });