/// <reference path="Storage.ts" />
var CountyApp;
(function (CountyApp) {
    var HomeCtrl = (function () {
        function HomeCtrl($scope, Storage) {
            var me = this;

            $scope.counters = Storage.counters;
        }
        return HomeCtrl;
    })();

    angular.module("CountyApp").controller("HomeCtrl", ["$scope", "Storage", HomeCtrl]);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=HomeCtrl.js.map
