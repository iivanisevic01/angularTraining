(function(angular) {

	config.$inject = ["widgets2Provider", "WidgetRESTSvcBaseURL"];
	
	function config(widgets2Provider, WidgetRESTSvcBaseURL) {
		widgets2Provider.setBaseUrl(WidgetRESTSvcBaseURL);
	}
	
	angular.module("WidgetApp.Services")
		.config(config);
	
})(angular);