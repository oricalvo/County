/// <reference path="Counter.ts" />

module CountyApp {
    angular.module("CountyApp").controller("NewCounterCtrl", ["$scope", "$location", "Counter", "Storage",
        function ($scope, $location, Counter: Counter, Storage: Storage) {
            $scope.add = function () {
                try {
                    var counter = new Counter($scope.name);
                    Storage.addCounter(counter);

                    $location.path("/");
                }
                catch (err) {
                    alert(err.message);
                }
            }
        }]);
}
