var CountyApp;
(function (CountyApp) {
    angular.module("CountyApp", [
        "ngRoute"
    ]).config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "/views/Main/Home"
            }).when("/counter/new", {
                templateUrl: "/views/Counter/New"
            }).otherwise({
                redirectTo: "/"
            });

            $locationProvider.html5Mode(true);
        }
    ]);
})(CountyApp || (CountyApp = {}));
//# sourceMappingURL=CountyApp.js.map
