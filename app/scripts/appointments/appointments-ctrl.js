'use strict';

angular.module('meetMe')
  .controller('AppointmentsCtrl', 
    // Dependecies
    ['$scope','$http','$stateParams','appointmentStorage',
    // Namespaces
    function ($scope, $http, $stateParams, appointmentStorage) {

      // Get current Appointment Selection
      $scope.currentAppointment = $stateParams.appointment;

      // Grab Data for All Existing Appointments
      $scope.appointments = appointmentStorage.data

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
        if($scope.creatingAppointment === false){
          $scope.creatingAppointment = true;
        } else {
          $scope.creatingAppointment = false;
        }
      };

      // Create and inject new appointment
      $scope.createAppointment = function createAppointment(appointmentObj){
        $scope.newAppointment = appointmentObj;
        $scope.newAppointment.uid = $scope.createRandomHash();
        $scope.creatingAppointment = false;
        $scope.appointments.push($scope.newAppointment);
      };

      // TODO
      $scope.editAppointment = function createAppointment(){
        
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

      $scope.detailViewSelector($scope.currentAppointment);    
  }])
  .factory('appointmentStorage', function () {
    return { 
      data : [
        {
          'uid': '349q98dwy2djksjda',
          'title': 'Doctor Checkup',
          'startTime': '3:00 PM',
          'endTime': '5:00 PM',
          'appointmentWith': 'Dr. Kovorkian',
          'description': 'Need to get my head examined'
        },
        {
          'uid': 'hda9824gds98',
          'title': 'Job Interview',
          'startTime': '12:00 PM',
          'endTime': '3:00 PM',
          'appointmentWith': 'Micheal Fastburger',
          'description': 'Make sure to mention all the awards they have won'
        },
        {
          'uid': '98u23rc9q83f2nf',
          'title': 'Food Shopping',
          'startTime': '6:00 PM',
          'endTime': '7:00 PM',
          'appointmentWith': 'Dad',
          'description': 'Don\'t forget fish and potatoes'
        }
      ]
    };
  });
