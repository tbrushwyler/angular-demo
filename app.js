angular.module('bugsquish', []);

angular.module('bugsquish').controller('bugsquishController',
	['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
		var bugHeight = 24;
		var bugWidth = 24;
		var numBugsToWin = 10;
		var waitPeriod = 2000;

		$scope.init = function() {
			$scope.numHits = 0;
			$scope.numMisses = 0;

			$scope.bugs = [];
			$scope.addBug();
		};

		$scope.addBug = function() {
			// create a new un-squished bug
			var bug = {
				squished: false
			};

			// set the location for the bug
			$scope.setLocation(bug);

			// add the bug to the array of bugs so it will appear on-screen
			$scope.bugs.push(bug);
		};

		$scope.setLocation = function(bug) {
			var maxX = $window.innerWidth - bugWidth;
			var maxY = $window.innerHeight - bugHeight;

			bug.x = Math.random() * maxX;
			bug.y = Math.random() * maxY;
		};

		$scope.squish = function(bug, $event) {
			// increment the number of hits

			// set the bug as squished

			// add a new bug to squish

			$event.stopPropagation();
		};

		$scope.miss = function() {
			// increment the number of misses
		};

		$scope.getUnsquishedBug = function() {
			return _.find($scope.bugs, function(bug) { return !bug.squished; });
		}

		$scope.$watch('numHits', function() {
			if ($scope.numHits == numBugsToWin) {
				alert("Game over!\n\nYour final score is " + ($scope.numHits - $scope.numMisses));

				// restart the game
				$scope.init();
			}
		});

		$scope.init();
	}]
);