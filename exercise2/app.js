var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

$http.get("data.json")
.then(function(response) {
    $scope.artist = response.data;
});

$scope.idOrder = 'id';
  
});
