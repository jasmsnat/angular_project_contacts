'use strict';
angular.module("appContacts")
    .directive("personForm", function() {
        return {
            restrict: "EAC",
            templateUrl: "/code/views/personForm.html",
        };
    });