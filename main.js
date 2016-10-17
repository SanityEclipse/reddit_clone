var app = angular.module("clone", ['ngAnimate'])

app.controller("firstController", function($scope) {

    var post = [{
        title: 'Poulsbo Beach',
        image: 'https://scontent.fsnc1-5.fna.fbcdn.net/t31.0-8/14608944_10100197295091506_188077302519852923_o.jpg',
        author: 'Thomas Rizzo',
        description: 'A lush walking path on the shoreline of Puget Sound.',
        date: '10/16/2016'
    }, {
        title: 'The Calm Before the Storm',
        image: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/14522792_10103101029718573_568476902261592929_n.jpg?oh=44f12fdf4759a0a56731bf6fb865d953&oe=5864233C',
        author: 'Christina Dickinson',
        description: 'Kiana Lodge, prior to the wedding reception.',
        date: '10/17/2016'
    }, {
        title: 'Reception Party Selfie',
        image: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/14690871_10103100774355323_7322780977867358297_n.jpg?oh=9f3a5b97c1ad53d4e9751397e0e7a94f&oe=5896C142',
        author: 'Thomas Rizzo',
        description: 'Much class. Many wow.',
        date: '10/17/2016'
    }];

    $scope.post = post;
    $scope.master = {
        score: 0
    };

});
