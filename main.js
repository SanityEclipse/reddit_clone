var app = angular.module("clone", [])
    .controller("firstController", function($scope) {



        var post = [{
            title: 'Test Post',
            image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
            author: 'Thomas the Tank Engine',
            date: '01/01/2012'
        }, {
            title: 'Meow Meow Kitty Meow Meow',
            image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
            author: 'Yo Momma',
            date: '09/09/0001'
        }, {
            title: 'Flippity Flappity Floop',
            image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
            author: 'Mr. Garrison',
            date: '12/12/2001'
        }];

        $scope.post = post;

    });
