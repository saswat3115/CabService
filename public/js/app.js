angular.module('chatApp', ['ngRoute','appRoutes', 'ngCookies', 'MenuCtrl', 'ChatCtrl', 'LoginCtrl', 'SignupCtrl',
        'HomeCtrl', 'ui.bootstrap', 'ApiService', 'session','ngFileUpload', 'UploadCtrl'])
    .directive('menubBar', function () {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        }
    }).run(['$rootScope', '$location', 'sessionService', '$route',
        function ($rootScope, $location, sessionService, $route) {
            $rootScope.errorMsg = '';
            $rootScope.$on('$routeChangeStart', function (event, next, prev) {
                if (sessionService.getCookie('loggedinUser') == undefined &&
                    next.$$route.originalPath != '/signup') {
                    $location.path('/');
                }
            });
        }
    ]);