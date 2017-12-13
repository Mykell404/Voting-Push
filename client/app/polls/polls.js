'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
	  .when('/polls/new', {
        templateUrl: 'app/polls/new.html',
        controller: 'PollsCtrl'
      })
      .when('/polls/:fullName/:name', {
	 	templateUrl: 'app/polls/polls.html',
		controller: 'PollsCtrl'       
      })
	  .when('/polls/:fullName/:name/:chart', {
	 	templateUrl: 'app/polls/chart.html',
		controller: 'PollsCtrl'       
      })
	  .otherwise({
		templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl'
	 });
  });
