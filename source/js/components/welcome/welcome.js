(function() {
    angular.module('components')
    .controller('WelcomeCtrl', function(Products) {
        var vm = this;

        Products.getAll().then(function (res) {
            vm.products = res;
        });

        vm.activeUser = null;
        vm.setActiveUser = function (user) {
            vm.activeUser = user;
        }
    });

}());
