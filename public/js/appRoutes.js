angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
        $routeProvider
    
            // home page
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupController'
            })
            .when('/home',{
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/chat',{
                templateUrl: 'views/chat.html',
                controller: 'ChatController'
            });
    
        $locationProvider.html5Mode(true);
    
    }]);