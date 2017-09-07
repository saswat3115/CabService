angular.module('HomeCtrl',[]).controller('HomeController', function($scope, $location, apiService, sessionService){        
    $scope.username = sessionService.getCookie('loggedinUser').fname;
});