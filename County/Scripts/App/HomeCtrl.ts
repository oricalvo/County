module CountyApp {
    class HomeCtrl {
        id: number;

        constructor($scope) {
            var me = this;
        }
    }

    angular.module("CountyApp").controller("HomeCtrl", HomeCtrl);
}
