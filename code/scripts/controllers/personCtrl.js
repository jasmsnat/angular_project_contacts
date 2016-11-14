'use strict';
angular.module("appContacts")
    .controller("personCtrl",["$scope", "personService", function($scope, personService){
    
        $scope.personModel = {
            personInfoId: "",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            state:"",
            gender:"",
            email: ""
        };
        
        $scope.personEditModel = {
            personInfoId: "",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            state:"",
            gender:"",
            email: ""
        };
                
        /*$scope.personModel.firstName = "";
        $scope.personModel.lastName = "";
        $scope.personModel.phoneNumber = "";
        $scope.personModel.state = "";
        $scope.personModel.gender = "";*/
        
        /*$scope.personArray = [
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
        ];*/
        
        /*$scope.personForm = {
            addPerson:function() {
                var personObj = {
                    entryNum: $scope.personModel.entryNum,
                    firstName: $scope.personModel.firstName,
                    lastName: $scope.personModel.lastName,
                    phoneNumber: $scope.personModel.phoneNumber,
                    state: $scope.personModel.state,
                    gender: $scope.personModel.gender
                };
                $scope.personArray.push(personObj);
                $scope.personModel.entryNum++;
            }
        }*/
        
        personService.personObj = $scope.personModel;
//        $scope.personArray = personService.personArray;
        $scope.personArray = [];
        updatePersonList();
        
        $scope.personToggle = {
            sortBy: 'firstName',
            sortOrder: false,
            toggleColumn: function(columnName) {
                if($scope.personToggle.sortBy != columnName) {
                    $scope.personToggle.sortBy = columnName;
                    $scope.personToggle.sortOrder = false;
                } else {
                    $scope.personToggle.sortOrder = !$scope.personToggle.sortOrder;
                }
            }
        };
        
        $scope.personForm = { 
//            addPerson: personService.addPerson
            addPerson: function() { //adds to database table
                personService.addPerson().then(function() {
                    updatePersonList();
                    reset();
                });
            },
            deletePerson: function(id) { //deletes from database table
                personService.deletePersonList(id).then(function() {
                    updatePersonList();
                });
            },
            editPerson: function(editObj) { //displays in edit boxes
                console.log(editObj);
                $scope.personEditModel = editObj;
            },
            updatePerson: function(updateObj) {
                console.log(updateObj);
                personService.putPersonList(updateObj).then(function() {
                    updatePersonList();
                    resetEdit();
                });
            }
        };
        
        function updatePersonList() {
            var personListPromise = personService.getPersonList();
            personListPromise.then(function(response) {
                $scope.personArray = response;
            });
        }
        
        $scope.resetPersonModel = {};
        function reset() {
            $scope.personModel = angular.copy($scope.resetPersonModel);
            personService.personObj = $scope.personModel;
        }
        
        $scope.resetPersonEditModel = {};
        function resetEdit() {
            $scope.personEditModel = angular.copy($scope.resetPersonEditModel);
            personService.personObj = $scope.personEditModel;
        }
        
    }]);