'use strict';
angular.module("appContacts")
    .directive("personForm", function() {
        return {
            restrict: "EAC",
            controller: 'personCtrl',
            templateUrl: "/code/views/personForm.html",
        };
    });