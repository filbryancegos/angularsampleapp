var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope) {

    var movie = [
        {
            title: 'Eking',
            image: 'images/1.jpg',
            description: "the qick brown fox jump over the lazy dog",
            category: 'Grade A'
        },
        {
            title: 'Amang',
            image: 'images/2.jpg',
            description: "the qick brown fox jump over the lazy dog",
            category: 'Grade A'
        },
        {
            title: 'Amang',
            image: 'images/3.jpg',
            description: "the qick brown fox jump over the lazy dog",
            category: 'Grade A'
        },
        {
            title: 'Amang',
            image: 'images/4.jpg',
            description: "the qick brown fox jump over the lazy dog",
            category: 'Grade A'
        },
        {
            title: 'Amang',
            image: 'images/5.jpg',
            description: "the qick brown fox jump over the lazy dog",
            category: 'Grade A'
        }
    ]

    $scope.movies = movie;

    $scope.newTitle = '';
    $scope.newCategory = '';
    $scope.newDescription = '';

    $scope.validateTitle = function() {
        if($scope.newTitle.length > 0) {
            console.log($scope.newTitle);
        } else {
            console.log("this is required");
        }
    }

    $scope.selectCategory = function() {
        console.log($scope.newCategory);
    }

    $scope.checkDescription = function() {
        console.log($scope.newDescription);
    }

    $scope.submitMovie = function() {
        var movie = {
            title: $scope.newTitle,
            image: 'images/2.jpg',
            description: $scope.newDescription,
            category: $scope.newCategory
        }
        $scope.movies.push(movie);
        console.log($scope.movies);
    }

    console.log($scope.movies);

    $scope.btnActive = 'div1';

    $scope.setActive = function(element) {
        $scope.btnActive = element;
    }
})