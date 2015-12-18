(function(angular) {
	function directive() {
		return {
			require: "ngModel",
			link: function postLink(scope, element, attrs, ctrl) {
				function validate(value) {
					
					console.log(value);
					
					if (value == null || String(value).length < attrs.len) {
						// invalid - return nothing so the loop does not proceed
						ctrl.$setValidity("fmr-required", false);
						return;
					} else {
						// valid
						ctrl.$setValidity("fmr-required", true);
						return value;
					}
				}
				// push the validate function on the formatters and parsers array
				ctrl.$formatters.push(validate);
				ctrl.$parsers.push(validate);
			}
		}
	}
	
	angular.module("WidgetApp.Directives")
		.directive("fmrRequired", directive);
})(angular);