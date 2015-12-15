(function() {
  angular.module('seed')
  .config(BasicHttpConfig);


  function BasicHttpConfig($httpProvider) {
    $httpProvider.useApplyAsync(true);
  }

}());
