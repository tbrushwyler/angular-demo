angular.module('bugsquish', []);

angular.module('bugsquish').controller('bugsquishController',
	['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
		var bugHeight = 24;
		var bugWidth = 24;
		var waitPeriod = 2000;

		$scope.init = function() {
			$scope.numHits = 0;
			$scope.numMisses = 0;

			$scope.bugs = [];
			$scope.addBug();
		};

		$scope.addBug = function() {
			var maxX = $window.innerWidth;
			var maxY = $window.innerHeight;

			var x = Math.random() * maxX;
			var y = Math.random() * maxY;

			var bug = {
				squished: false
			};
			$scope.setLocation(bug);

			$scope.bugs.push(bug);
		};

		$scope.setLocation = function(bug) {
			if (bug.squished)
				return;

			var maxX = $window.innerWidth - bugWidth;
			var maxY = $window.innerHeight - bugHeight;

			bug.x = Math.random() * maxX;
			bug.y = Math.random() * maxY;

			$timeout(function() {
				$scope.setLocation(bug);
			}, waitPeriod);
		};

		$scope.squish = function(bug, $event) {
			// increment the number of hits
			$scope.numHits++;

			// set the bug as squished
			bug.squished = true;

			// add a new bug to squish
			$scope.addBug();

			$event.stopPropagation();
		};

		$scope.miss = function() {
			// increment the number of misses
			$scope.numMisses++;
		};

		$scope.getUnsquishedBug = function() {
			return _.find($scope.bugs, function(bug) { return !bug.squished; });
		}

		$scope.$watch('numHits', function() {
			if ($scope.numHits == 10) {
				alert("Game over!\n\nYour final score is " + ($scope.numHits - $scope.numMisses));
				$scope.init();
			}
		});

		$scope.init();
	}]
);