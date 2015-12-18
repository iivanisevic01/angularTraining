(function(angular) {
	ctrl.$inject = ["$scope", "widgets2", "$stateParams", "$state", "colors"];
	
	function ctrl($scope, widgets, $stateParams, $state, colors) {
		// copies over properties from the original object so we don't update the original object until the save button is pressed
		// if you wanted to modify the original object in place, just drop the angular.extend part (mixin pattern)

		// $scope.widget = angular.extend({}, widgets.get(parseInt($stateParams.widgetId, 10)));

		if ($stateParams.widgetId) {
			widgets.get($stateParams.widgetId).then(function(results) {
				$scope.widget = results.data;			
			});			
		} else {
			$scope.widget = {};
		}
		
		$scope.colors = colors.getAll();
		
		// validation of the save button action
		function valid() {
			$scope.messages = [];
			var invalid = false;
			if (!$scope.widget.name) {
				$scope.messages.push("Please enter a widget name.");
				invalid = true;
			}
			return !invalid;
		}
		
		$scope.saveWidget = function() {

			// validation of the save button
			if (!valid()) {
				$scope.showAlert = true;
				return;
			} else {
				$scope.showAlert = false;
			}
			
			if ($scope.widget._id) {
				widgets.update($scope.widget).then(function() {
					$state.go("home");					
				});
			} else {
				widgets.insert($scope.widget).then(function() {
					$state.go("home");					
				});
			}
		};
		
		$scope.deleteWidget = function() {
			if (confirm("Are you sure you want to delete this widget?")) {
				widgets.delete($scope.widget._id);				
			}
			$state.go("home");
		};		
	}
	
	angular.module("WidgetApp.Controllers")
		.controller("EditCtrl", ctrl);

})(angular);