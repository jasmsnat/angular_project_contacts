'use strict';
angular.module("appContacts").directive("personEdit", function() {
    return {
        restrict: "EAC",
        controller: "personCtrl",
        templateUrl: "/code/views/personEdit.html"
    }
})