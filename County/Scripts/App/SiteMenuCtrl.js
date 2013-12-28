var CountyApp;
(function (CountyApp) {
    angular.module("CountyApp").controller("SiteMenuCtrl", [
        "$scope",
        "$element",
        function ($scope, $element) {
            $scope.itemClicked = function () {
                $element.find(".navbar-collapse").collapse('hide');
            };
        }
    ]);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=SiteMenuCtrl.js.map
