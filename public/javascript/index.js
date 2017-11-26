var app = angular.module("loyalty", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    })
    .when("/signup", {
        templateUrl : "signup.html"
    });
});
app.controller('signup', function($scope, $http) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.userName = "";
    $scope.password = "";
    $scope.passwordConfirm = "";
    $scope.email = "";
    $scope.phone = "";

	$scope.submitData = function(){
		console.log($scope.firstName, $scope.lastName, $scope.userName, $scope.password, $scope.email, $scope.phone);
		var url="/userSignup"
		var data = {
			"firstName" : $scope.firstName,
			"lastName" : $scope.lastName,
			"userName" : $scope.userName,
			"password" : $scope.password,
			"email" : $scope.email,
			"phone" : $scope.phone,
		};
                $http.post(url, data)
                   .then(
                       function(response){
                         // success callback
			console.log("saved");
                       }, 
                       function(response){
                         // failure callback
			console.log("failed");
                       }
                    );
	}
});
