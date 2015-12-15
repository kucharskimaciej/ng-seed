angular.module('filters', []);
angular.module('components', []);
angular.module('services', []);
angular.module('templates', []);

angular.module('seed', [
    'filters',
    'components',
    'services',
    'templates',

    "ui.router"
]);
