'use strict';
angular.module("appContacts")
    .service("personService", ["$http", function($http){
    //remember, service does not have a scope variable
    this.personObj = {
        personInfoId: "",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        state:"",
        gender:"",
        email: ""
    }
        
    this.addPerson = addPerson;
    
//    this.personArray = [];
    
    /*this.getElement = function(index) {
        var length = this.personArray.length;
        if(index < length) {
            console.log(this.personArray[index].firstName);
        }
    }*/
    
    var that = this;
    
    this.getPersonList = function() {
        return $http({
            method: "GET",
            url: "/service/person"
        }).then(function(result) {
            return result.data;
        });
    }
    
    this.postPersonList = function(dataParam) {
        return $http({
            method: "POST",
            url: "/service/person",
            data: dataParam
        }).then(function(result) {
            return result.status;
        });
    } 
    
    this.deletePersonList = function(id) {
        return $http({
            method: "DELETE",
            url: "/service/person/"+id
        }).then(function(result) {
            return result.data;
        }); 
    }
    
    this.putPersonList = function(dataParam) {
        return $http({
            method: "PUT",
            url: "/service/person/" + dataParam.personinfoid,
            data: dataParam
        }).then(function(result) {
            return result.data;
        });
    }
    
    function addPerson() {
        var newPersonObj = {
            firstname: that.personObj.firstName,
            lastname: that.personObj.lastName,
            phone: that.personObj.phoneNumber,
            state: that.personObj.state,
            gender: that.personObj.gender,
            email: that.personObj.email
        }
//        that.personArray.push(newPersonObj);
        return that.postPersonList(newPersonObj);
    }
}]);