module CountyApp {
    class NewCounterCtrl {
        id: number;

        constructor($scope, $location: ng.ILocationService) {
            var me = this;

            $scope.add = function () {
                $location.path("/");
            }
        }
    }

    angular.module("CountyApp").controller("NewCounterCtrl", NewCounterCtrl);
}
