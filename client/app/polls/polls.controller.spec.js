'use strict';

describe('Controller: PollsCtrl', function () {

  // load the controller's module
  beforeEach(module('votingappApp'));

  var PollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
  	$httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/polls')
      .respond(['Bacon', 'Tuna']);
	  
    scope = $rootScope.$new();
    PollsCtrl = $controller('PollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  	$httpBackend.flush();
    expect(1).toEqual(1);
  });
});
