(function(angular) {
	// injection is done to avoid problems with minimization renaming variables
	// $q is the promise library used in the promise explanation
	ctrl.$inject = ["$scope", "widgets2", "$q"];
	
	function ctrl($scope, widgets, $q) {
		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;			
		});				
	}
	// don't pass the second argument here when fetching the controller or it will recreate the controller without the right dependency
	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);