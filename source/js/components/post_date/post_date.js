(function() {
    angular.module('components')
    .directive('postDate', function() {
        return {
            scope: {
                date: "="
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'components/post_date/post_date.tpl.html'
        };
    });

}());
