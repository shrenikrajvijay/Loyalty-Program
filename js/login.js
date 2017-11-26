var app = angular.module("loyalty", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    })
    .when("/signup", {
        templateUrl : "login.html"
    });
});
