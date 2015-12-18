(function(angular) {
	// injection is done to avoid problems with minimization renaming variables
	// $q is the promise library used in the promise explanation
	ctrl.$inject = ["$scope", "widgets2", "$q"];
	
	function ctrl($scope, widgets, $q) {
		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;			
		});
		
		// promise explanation - unrelated to the functioning of this controller
		var youngLady = $q.defer();
		var youngMan = youngLady.promise;
		
		youngMan.then(function(results) {
			console.log("time to get ready to get married");
			console.log(results);			
		}).catch(function(results) {
			console.log("young man is going to sign up for eHarmony");
			console.log(results);
		});
		
		setTimeout(function() {
			console.log("she has decided");
			youngLady.resolve("she said yes because her parents said so");
			//youngLady.reject("she took a Facebook poll, and her friends said no...");
		}, 3000);
		console.log("young man is waiting....");
		
	}
	// don't pass the second argument here when fetching the controller or it will recreate the controller without the right dependency
	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);