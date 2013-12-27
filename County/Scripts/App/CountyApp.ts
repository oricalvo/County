module CountyApp {
    function init($routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/Main/Home",
            })
            .when("/counter/new", {
                templateUrl: "/views/Counter/New",
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }

    angular.module("CountyApp",
        [
            "ngRoute"
        ],
        init);
}
