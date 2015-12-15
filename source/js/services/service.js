(function() {
    angular.module('services')
    .service('Products', function($http) {

        this.getAll = function () {
            return $http.get('/obviouslyfake');
        };

    });

}());
