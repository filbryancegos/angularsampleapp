var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    var movie = [
        {
            title: "Spiderman",
            image: 'images/1.jpg',
            category: 'grade A',
            description: 'The quick brown fox jump over the lazy dog'
        },
        {
            title: "Aquaman",
            image: 'images/2.jpg',
            category: 'grade B',
            description: 'The quick brown fox jump over the lazy dog'
        },
        {
            title: "Batman",
            image: 'images/3.jpg',
            category: 'grade C',
            description: 'The quick brown fox jump over the lazy dog'
        }
    ]

    $scope.option = ['','Eking','Brutos','Amang']
    $scope.movies = movie;

    // $scope.newTitle = '';
    // $scope.newCategory = '';
    // $scope.newdescription = '';

    $scope.newmovie = {
        title: '',
        image: 'images/3.jpg',
        category: '',
        description: ''
    }

    $scope.validateTitle =  function() {
     if($scope.newmovie.title.length > 0) {
         console.log($scope.newmovie.title);
     } else {
         console.log("please input");
     }
    }

    $scope.selectedCategory = function() {
        console.log($scope.newmovie.category);
    }

    $scope.validateTextarea = function() {
        console.log($scope.newmovie.description)
    }

    
    $scope.clear = function() {
        $scope.newmovie.title = '';
        $scope.newmovie.category = '';
        $scope.newmovie.description = '';
    }
    $scope.subMit = function() {
        // var movie = {
        //     title: $scope.newTitle,
        //     category: $scope.newCategory,
        //     image: 'images/1.jpg',
        //     description: $scope.newdescription
        // }

        $scope.movies.push(angular.copy($scope.newmovie));
        //$scope.clear();
    }
})