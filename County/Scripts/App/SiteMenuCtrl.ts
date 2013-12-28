module CountyApp {
    angular.module("CountyApp").controller("SiteMenuCtrl", ["$scope", "$element", function ($scope, $element: JQuery) {
        $scope.itemClicked = function () {
            $element.find(".navbar-collapse").collapse('hide');
        }
    }]);
}
