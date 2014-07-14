'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('meetMe'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define baseline states', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('AppointmentsCtrl', {
      $scope: scope
    });

    expect(scope.currentAppointment).toBeFalsy();
    expect(scope.creatingAppointment).toBeFalsy();
    expect(scope.detailViewEditing).toBeFalsy();
    expect(angular.isArray(scope.appointments)).toBeTruthy();
    expect(scope.appointments.length === 3).toBeTruthy();

    $scope.showTemplate
    // $scope.createRandomHash  No way to test randomization
    $scope.createAppointment
    
    $scope.detailViewSelector
    $scope.editAppointment
    $scope.updateAppointment
    $scope.deleteAppointment

  }));
});
