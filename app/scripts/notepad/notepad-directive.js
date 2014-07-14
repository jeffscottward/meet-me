'use strict';

angular.module('meetMe')
  .directive('notepad', function() {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: '/partials/notepad.html'
        // controller: '' /* Write or call controller*/
    };
  });