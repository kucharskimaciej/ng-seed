(function() {
  angular.module('seed')
  .config(UrlMatchingConfig)
  .config(DefaultRouteConfig);


  function UrlMatchingConfig($urlMatcherFactoryProvider) {
    "use strict";

    // enable matching urls with trailing slashes
    // must be enabled BEFORE state definitions
    $urlMatcherFactoryProvider.strictMode(false);

    // footure proofing for when sb accidentaly turns capslock on
    $urlMatcherFactoryProvider.caseInsensitive(true);
  }

  function DefaultRouteConfig ($urlRouterProvider) {
    "use strict";

    $urlRouterProvider.when("", "/");

    $urlRouterProvider.otherwise(function($injector) {
        $injector.invoke(function($state) {
            $state.go("404");
        });
    });
  }

}());
