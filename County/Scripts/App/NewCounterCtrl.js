/// <reference path="Counter.ts" />
var CountyApp;
(function (CountyApp) {
    angular.module("CountyApp").controller("NewCounterCtrl", [
        "$scope",
        "$location",
        "Counter",
        "Storage",
        function ($scope, $location, Counter, Storage) {
            $scope.add = function () {
                try  {
                    var counter = new Counter($scope.name);
                    Storage.addCounter(counter);

                    $location.path("/");
                } catch (err) {
                    alert(err.message);
                }
            };
        }
    ]);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=NewCounterCtrl.js.map
