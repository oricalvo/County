/// <reference path="Storage.ts" />

module CountyApp {
    class HomeCtrl {
        id: number;
        counters: Array<Counter>;

        constructor($scope, Storage: Storage) {
            var me = this;

            $scope.counters = Storage.counters;
        }
    }

    angular.module("CountyApp").controller("HomeCtrl", ["$scope", "Storage", HomeCtrl]);
}
