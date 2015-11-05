angular.module('directory.services', ['ngResource'])

    .factory('Fruits', function ($resource) {
        return $resource('/fruits/:fruitId/:data');
    });