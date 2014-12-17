angular.module('bugsquish', []);

angular.module('bugsquish').controller('bugsquishController',
	['$scope', '$window', '$log', function($scope, $window, $log) {
		var bugHeight = 48;
		var bugWidth = 48;

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

			$scope.bugs.push({
				x: x,
				y: y,
				squished: false
			});
		};

		$scope.hit = function(bug) {
			// increment the number of hits

			// add a new bug to squish
		};

		$scope.miss = function() {
			// increment the number of misses
		};

		$scope.clicked = function($event) {
			var clickX = $event.x;
			var clickY = $event.y;

			var bug = $scope.getUnsquishedBug();
			if ((bug.x <= clickX && clickX <= bug.X + bugWidth) && (bug.y <= clickY && clickY <= bug.Y + bugHeight)) {
				hit(bug);
			} else {
				miss(bug);
			}
		};

		$scope.getUnsquishedBug = function() {
			return _.find($scope.bugs, function(bug) { return !bug.squished; });
		}

		$scope.init();
	}]
);