'use strict';

angular.module('meetMe')
  .controller('AppointmentsCtrl', 
    
    // Dependecies
    ['$scope','$http','$state','$stateParams','appointmentStorage',
    
    // Namespaces
    function ($scope, $http, $state, $stateParams, appointmentStorage) {

      // Get current Appointment Selection
      $scope.currentAppointment = $stateParams.appointment;

      // Grab Data for All Existing Appointments
      $scope.appointments = appointmentStorage.data;

      // Current View State
      $scope.creatingAppointment = false;

      // Method to toggle the create appointment micro view
      $scope.showTemplate = function(){
        if($scope.creatingAppointment === false){
          $scope.creatingAppointment = true;
        } else {
          $scope.creatingAppointment = false;
        }
      };

      // Method to create unique identifier of when creating new appointmnets
      $scope.createRandomHash = function(){
        return Math.random().toString(36).substring(7);
      };

      // Method to create and inject new appointment
      $scope.createAppointment = function(appointmentObj){
        $scope.newAppointment = appointmentObj;
        $scope.newAppointment.uid = $scope.createRandomHash();
        $scope.creatingAppointment = false;
        $scope.appointments.push($scope.newAppointment);
      };

      // Method to show current appointment  in detail view
      $scope.detailViewSelector = function(selection) {
        $scope.appointments.forEach(function(currentLoopItem){
          if(currentLoopItem.uid === selection) {

            // Use this for view template
            $scope.detailViewData = currentLoopItem;          
          }
        });
      };

      // Show current appointment in detail view
      $scope.detailViewSelector($scope.currentAppointment);

      // TODO
      $scope.editAppointment = function(){
        
      };

      // Method to delete appointment from list
      // which autoupdates the view too
      $scope.deleteAppointment = function(appointmentUID){

        // Loop through all appointments
        // while keeping track of index
        for (var i = $scope.appointments.length-1; i >= 0; i--) {
            
            // If the current index has the right ID
            if ($scope.appointments[i].uid === appointmentUID) {

                // Delete it
                $scope.appointments.splice(i, 1);

                // And if the detial ciew is currently being shown
                if($scope.currentAppointment === appointmentUID) {

                  // Then go back to list
                  $state.go('appointments');
                }
            }
        }
      };

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
