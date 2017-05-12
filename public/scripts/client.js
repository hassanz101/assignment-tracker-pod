console.log('in the client');
// bringing angular to the party
var myApp = angular.module('myApp', []);
// set up a controller
myApp.controller('AssignmentInputs', function($http) {
  //variable global to this controller
  var vm = this;

  vm.postAssignments = function() {
    console.log('in postAssignments ng-click');
    var objectToSend = {
      assignment: vm.assignName,
      student: vm.studentName,
      score: vm.score,
      date: vm.dateComp,
    };//end objectToSend
    console.log('adding objectToSend ->', objectToSend);

    // angular post call
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then(function(response) {
      console.log('back from server ->', response);
    });
  };

// vm.getAssignments = function(){
//   console.log('in getAssignments ->');

// };
}); //end controller
