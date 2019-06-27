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

    $scope.movielist = {
        title: '',
        image: 'images/2.jpg',
        description: '',
        category: ''
    }

    $scope.validateTitle = function() {
        if($scope.movielist.title.length > 0) {
            console.log($scope.movielist.title);
        } else {
            console.log("this is required");
        }
    }

    $scope.selectCategory = function() {
        console.log($scope.movielist.category);
    }

    $scope.checkDescription = function() {
        console.log($scope.movielist.description);
    }

    $scope.clear = function() {
        $scope.movielist.title = '',
        $scope.movielist.description = '',
        $scope.movielist.category = ''

    }

    $scope.submitMovie = function() {
        $scope.movies.push(angular.copy($scope.movielist));

        $scope.clear();
        console.log($scope.movies);
    }

    console.log($scope.movies);

    $scope.btnActive = 'div1';

    $scope.setActive = function(element) {
        $scope.btnActive = element;
    }
})