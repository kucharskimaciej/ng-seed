(function() {
    var convert, _default;

    convert = function(i) {
      return i instanceof Date ? i : new Date(i);
    };

    _default = "";

    angular.module('filters')
    .filter('weekday', function() {
        var days;
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return function(input) {
            return days[convert(input).getDay()] || _default;
        };
    })
    .filter('dayInMonth', function() {
        return function(input) {
            return convert(input).getDate() || _default;
        };
    })
    .filter('monthName', function() {
        var months;
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return function(input) {
            return months[convert(input).getMonth()] || _default;
        };
    })
    .filter('year', function() {
        return function(input) {
            return convert(input).getFullYear() || _default;
        };
    });

}());
