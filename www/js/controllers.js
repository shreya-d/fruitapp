angular.module('directory.controllers', [])

    .controller('FruitListCtrl', function ($scope, Fruits) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.fruits = Fruits.query();
        }

        $scope.search = function () {
            $scope.fruits = Fruits.query({name: $scope.searchKey});
        }

        $scope.fruits = Fruits.query();
    })

    .controller('FruitDetailCtrl', function($scope, $stateParams, Fruits) {
        console.log('details');
        $scope.fruit = Fruits.get({fruitId: $stateParams.fruitId});
    });

    