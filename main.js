var module = angular.module("myApp", ['ngStorage'])
                    .controller("MyController", MyController)
                    .service("myService", MyService);

MyController.$inject = ["$scope", "myService"];

function MyController($scope, $localStorage, myService) {
    $scope.$storage = $localStorage.userData = {
        userName: "",
        age: ""
    };


    $scope.onSave = function () {
        myService.saveData(userData);
    }
}

function MyService() {

    this.saveData = function (data) {


        /*$http({
            method: "POST",
            data: data
        })*/
    }
}

angular.bootstrap(angular.element(document), ['myApp']);