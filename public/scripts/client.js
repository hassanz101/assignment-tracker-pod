console.log('in the client');
// bringing angular to the party
var myApp = angular.module('myApp', []);
// set up a controller
myApp.controller('AssignmentInputs', function($http) {
  //variable global to this controller
  var vm = this;

  //holds the response.data from the get assignments function below
  vm.assignmentArray = [];

//creates object, sends to server to get added to database
  vm.postAssignments = function() {
    console.log('in postAssignments ng-click');

    //object sent to server from inputs on the DOM
    var objectToSend = {
      assignment: vm.assignName,
      student: vm.studentName,
      score: vm.score,
      date: vm.dateComp,
    };//end objectToSend
    console.log('adding objectToSend ->', objectToSend);

    // angular post call to server & db
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then(function(response) {
      console.log('back from server ->', response);
      vm.getAssignments();
    });
  };

//get all the assignments from the db and assign them to assignmentArray above
//appended to the DOM via that array & their attributes
vm.getAssignments = function(){
  console.log('in getAssignments ->');
  $http({
    method: 'GET',
    url: '/assignments',
  }).then(function success(response){
    console.log('this is the response', response);
    vm.assignmentArray = response.data;
    console.log('in vm response ->',response.data);
    console.log(vm.assignmentArray);
  });//success
};
}); //end controller
