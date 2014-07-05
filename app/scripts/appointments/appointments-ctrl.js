'use strict';

angular.module('meetMe')
  .controller('AppointmentsCtrl', function ($scope) {

    // Setting 
    $scope.creatingAppointment = false;

    $scope.newAppointment = {
      'uid': '',
      'title': '',
      'startTime': '',
      'endTime': '',
      'appointmentWith': '',
      'description': ''
    };

    $scope.createRandomHash = function createRandomHash(){
      return Math.random().toString(36).substring(7);
    };

    $scope.showTemplate = function showTemplate(){
      $scope.creatingAppointment === false ?
          $scope.creatingAppointment = true :
          $scope.creatingAppointment = false;
    };

    $scope.appointments = [
      {
        'uid': $scope.createRandomHash(),
        'title': 'Doctor Checkup',
        'startTime': '3:00 PM',
        'endTime': '5:00 PM',
        'appointmentWith': 'Dr. Kovorkian',
        'description': 'Need to get my head examined'
      },
      {
        'uid': $scope.createRandomHash(),
        'title': 'Job Interview',
        'startTime': '12:00 PM',
        'endTime': '3:00 PM',
        'appointmentWith': 'Micheal Fastburger',
        'description': 'Make sure to mention all the awards they have won'
      },
      {
        'uid': $scope.createRandomHash(),
        'title': 'Food Shopping',
        'startTime': '6:00 PM',
        'endTime': '7:00 PM',
        'appointmentWith': 'Dad',
        'description': 'Don\'t forget fish and potatoes'
      }
    ];

    $scope.createAppointment = function createAppointment(appointmentObj){
      $scope.newAppointment = appointmentObj;
      $scope.newAppointment.uid = $scope.createRandomHash();
      $scope.creatingAppointment = false;
      $scope.appointments.push($scope.newAppointment);
    };

    $scope.editAppointment = function createAppointment(appointmentObj){
      
    };

    $scope.deleteAppointment = function createAppointment(appointmentObj){
      $scope.appointments.pop(appointmentObj);
    };

  });
