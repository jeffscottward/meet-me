'use strict';

angular.module('meetMe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .state('appointments', {
        url: '/appointments',
        templateUrl: 'partials/appointment-list.html',
        controller: 'AppointmentsCtrl',
      })
      .state('appointments.appointment', {
        url: '/:appointment',
        templateUrl: 'partials/appointment-list.item.html',
        controller: function($scope,$stateParams){
          $scope.appointment = $stateParams.appointment;
        }
      });

    $urlRouterProvider.otherwise("/");
  })
;
