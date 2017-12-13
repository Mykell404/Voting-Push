'use strict';

angular.module('votingappApp')
  .controller('PollsCtrl', function ($scope, $routeParams, $http, Auth, $window) {
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.placeholders = ["Bacon","Tuna"];
	$scope.options = [];
 	$scope.pollOwner = $routeParams.fullName;
	$scope.pollTitle = $routeParams.name;
	
	var fullName = Auth.getCurrentUser().name;
    
	$scope.pollSelected = {};
	
	$scope.pollSelected = function(poll){
		$scope.pollSelected.poll = poll;
	};

	
	$scope.deletePoll = function(id){
		$http.delete('/api/polls/' + id).success(function(){
		 angular.forEach($scope.myPolls, function(x, i) {
			if (x._id === id) {
				 $scope.myPolls.splice(i, 1);
				}
      		});
		});
	};
	
	$scope.moreOptions = function(){
  		this.placeholders.push("New option");
	};	
	
	if($scope.pollOwner !== undefined){
		$http.get('/api/polls/' + $scope.pollOwner + "/" + $scope.pollTitle).success(function(polls){
			if(polls.length === 0){
				$window.location.href = '/polls';
			}
			$scope.pagePolls = polls[0];
			if($routeParams.chart){
				var data = {
					labels: $scope.pagePolls.options.options,
					datasets: [
						{
							fillColor: "rgba(37, 157, 232, 0.75)",
							data: $scope.pagePolls.options.values
						}
					]
				};
				var ctx = document.getElementById("myChart").getContext("2d");
				var myBarChart = new Chart(ctx).Bar(data,{
					 scaleShowGridLines : false,
				});	
			}
		});
	};

	$scope.submitVote = function(id){
		var selectedPoll = $scope.pollSelected.poll;
		var selectedPollValue = $scope.pollSelected.pollValue;
        var pollValues = $scope.pagePolls.options.values;
		for(var x in $scope.pagePolls.options.options){
			if($scope.pagePolls.options.options[x] === selectedPoll){
				pollValues[x]++;
			}
		}
		$http.put('api/polls/'+id,{options:{options:$scope.pagePolls.options.options, values:pollValues}}).success(function(){
			$window.location.href="/polls/" + $scope.pollOwner + "/" + $scope.pollTitle + "/chart";
		});
	};
		
	
	var stripTags = function(str){
		str = str.replace("/","");
		str = str.replace("\/","");
		str = str.replace("?","");
		return str;
	};
	
	$http.get('/api/polls/' + fullName).success(function(polls){
  		$scope.myPolls = polls;	
	});
	
	$scope.addNew = function(){
		var pollName = stripTags($scope.pollName);
		var options = $scope.options;
		$scope.optionValues = options.map(function(d){return 0;});
		
		$http.post('/api/polls', {name:pollName, fullName:fullName, options:{options:options,values:$scope.optionValues} }).success(function(poll) {
	 	$window.location.href = '/polls/'+fullName+'/'+pollName;
		});
	}

});
