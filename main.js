

angular.module("myApp", ['ngStorage'])
    .controller("MyController", MyController);

MyController.$inject = ["$scope", "$localStorage"];

function MyController($scope, $localStorage) {
    $scope.$storage = $localStorage.$default({});

    $scope.userData = {
        userName: "",
        age: ""
    };
}

angular.bootstrap(angular.element(document), ['myApp']);