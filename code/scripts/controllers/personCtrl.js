'use strict';
angular.module('appContacts')
    .controller('personCtrl', ['$scope', function($scope){
    
        $scope.personModel = {
            firstName:"",
            lastName:"",
            phoneNumber:"",
            state:"",
            gender:"",
            cars:"",
        };
        
        /*$scope.personModel.firstName = "";
        $scope.personModel.lastName = "";
        $scope.personModel.phoneNumber = "";
        $scope.personModel.state = "";
        $scope.personModel.gender = "";*/
        
        $scope.personArray = [/*
            {
                firstName:"Sterling",
                lastName:"Archer",
                phoneNumber:"111-111-1111",
                state: "NY"  ,
                gender: "male"
            },
            {
                firstName:"Sally",
                lastName:"Seashell",
                phoneNumber:"222-222-2222",
                state: "NC",    
                gender: "female"

            },
            {
                firstName:"Barack",
                lastName:"Obama",
                phoneNumber:"333-333-3333",
                state: "DC",
                gender: "male"
            },
            {
                firstName:"Michael",
                lastName:"Jordan",
                phoneNumber:"444-444-4444",
                state: "IL",
                gender: "male"
            },
            {
                firstName:"Zeus",
                lastName:"Jupiter",
                phoneNumber:"555-555-5555",
                state: "NY",
                gender: "male"
            }
        */];
        
        $scope.personForm = {
            addPerson:function() {
                var personObj = {
                    firstName: $scope.personModel.firstName,
                    lastName: $scope.personModel.lastName,
                    phoneNumber: $scope.personModel.phoneNumber,
                    state: $scope.personModel.state,
                    gender: $scope.personModel.gender,
//                    cars: $scope.personModel.cars;
                };
                $scope.personArray.push(personObj);
            }
        }
        
    }]);