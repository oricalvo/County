var CountyApp;
(function (CountyApp) {
    var NewCounterCtrl = (function () {
        function NewCounterCtrl($scope, $location) {
            var me = this;

            $scope.add = function () {
                $location.path("/");
            };
        }
        return NewCounterCtrl;
    })();

    angular.module("CountyApp").controller("NewCounterCtrl", NewCounterCtrl);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=NewCounterCtrl.js.map
