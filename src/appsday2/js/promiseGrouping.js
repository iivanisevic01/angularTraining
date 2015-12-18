(function(angular) {
	// injection is done to avoid problems with minimization renaming variables
	// $q is the promise library used in the promise explanation
	ctrl.$inject = ["$scope", "widgets2", "$q"];
	
	function ctrl($scope, widgets, $q) {
		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;			
		});
		
		// promise explanation - unrelated to the functioning of this controller
		var d1 = $q.defer(),
		d2 = $q.defer(),
		d3 = $q.defer();
		
		$q.all([d1.promise, d2.promise, d3.promise])
			.then(function() {
				console.log("all resolved");
			});
		
		setTimeout(function() {
			console.log("d1 resolved");
			d1.resolve();
		}, 2000);

		setTimeout(function() {
			console.log("d2 resolved");
			d2.resolve();
		}, 4000);
		
		setTimeout(function() {
			console.log("d3 resolved");
			d3.resolve();
		}, 6000);
	}
	// don't pass the second argument here when fetching the controller or it will recreate the controller without the right dependency
	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);