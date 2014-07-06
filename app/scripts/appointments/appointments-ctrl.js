'use strict';

angular.module('meetMe')
  .controller('AppointmentsCtrl', function ($scope,$http,$stateParams) {

    // Get current Appointment Selection
    $scope.appointment = $stateParams.appointment;

    // Grab Data for All Existing Appointments
    $http.get('/scripts/appointments/appointments.json')
         .success(function(data){
            $scope.appointments = data;
            $scope.detailViewSelector($scope.appointment);
         });

    // Current View State
    $scope.creatingAppointment = false;

    // New Appointment Template
    $scope.newAppointment = {
      'uid': '',
      'title': '',
      'startTime': '',
      'endTime': '',
      'appointmentWith': '',
      'description': ''
    };

    // Method for unique identifier of when creating new appointmnets
    $scope.createRandomHash = function createRandomHash(){
      return Math.random().toString(36).substring(7);
    };

    // Toggleing the view
    $scope.showTemplate = function showTemplate(){
      $scope.creatingAppointment === false ?
          $scope.creatingAppointment = true :
          $scope.creatingAppointment = false;
    };

    // Create and inject new appointment
    $scope.createAppointment = function createAppointment(appointmentObj){
      $scope.newAppointment = appointmentObj;
      $scope.newAppointment.uid = $scope.createRandomHash();
      $scope.creatingAppointment = false;
      $scope.appointments.push($scope.newAppointment);
      window.console.log($scope.newAppointment);
    };

    // TODO
    $scope.editAppointment = function createAppointment(appointmentObj){
      
    };

    // TODO
    $scope.deleteAppointment = function createAppointment(appointmentObj){
      $scope.appointments.pop(appointmentObj);
    };

    $scope.detailViewSelector = function detailViewSelector(selection) {
      $scope.appointments.forEach(function(currentLoopItem){
        if(currentLoopItem.uid === selection) {
          $scope.detailViewData = currentLoopItem;          
        }
      });
    };

    

  });
