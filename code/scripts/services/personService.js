'use strict';
angular.module("appContacts").service("personService", [function(){
    //remember, service does not have a scope variable
    this.personObj = {
        entryNum: "",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        state:"",
        gender:""
    }
    
    this.addPerson = addPerson;
    
    this.personArray = [];
    
    this.getElement = function(index) {
        var length = this.personArray.length;
        if(index < length) {
            console.log(this.personArray[index].firstName);
        }
    }
    
    var that = this;
    
    function addPerson() {
        var newPersonObj = {
            entryNum: that.personObj.entryNum,
            firstName: that.personObj.firstName,
            lastName: that.personObj.lastName,
            phoneNumber: that.personObj.phoneNumber,
            state: that.personObj.state,
            gender: that.personObj.gender
        }
        that.personArray.push(newPersonObj);
        that.personObj.entryNum++;
    }
}]);