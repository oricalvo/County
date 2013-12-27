var CountyApp;
(function (CountyApp) {
    function init($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/views/Main/Home"
        }).when("/counter/new", {
            templateUrl: "/views/Counter/New"
        }).otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode(true);
    }

    angular.module("CountyApp", [
        "ngRoute"
    ], init);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=CountyApp.js.map
