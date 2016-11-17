// Create the route module and name it routeApp
var app = angular.module('routeApp',['ngRoute']);

// Config the routes
app.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        })
        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
        })
});
// Create the controllers for the different pages below

app.controller ('routeCtrl', function($scope){
    $scope.message='lorem ipsum';
});


// home page controller
    // Create a message to display in the view
app.controller ('homeCtrl', function($scope){
    this.nav = [{
        title: 'Home',
        loc: '#/home'
    },{
        title: 'About Us',
        loc: '#/about'
    },{
        title: 'Contact Us',
        loc: '#/contact'
    }];
    $scope.message='Welcome to my Home Page';
});


// about page controller
    // Create a message to display in the view
app.controller ('aboutCtrl', function($scope){
    this.nav = [{
        title: 'Home',
        loc: '#/home'
    },{
        title: 'About Us',
        loc: '#/about'
    },{
        title: 'Contact Us',
        loc: '#/contact'
    }];
    $scope.message='Welcome to my About Page';
});

// contact page controller
    // Create a message to display in the view
app.controller ('contactCtrl', function($scope){
    this.nav = [{
        title: 'Home',
        loc: '#/home'
    },{
        title: 'About Us',
        loc: '#/about'
    },{
        title: 'Contact Us',
        loc: '#/contact'
    }];
    $scope.message='Welcome to my Contact Page';
});
