angular.module('MenuCtrl', []).controller('MenuController', function ($scope, $rootScope, $window, $location, sessionService, $timeout) {

    $scope.labelMsg = "";
    $scope.showGreeting = false;
    $scope.isNavCollapsed = false;


    //$scope.isHomeDisplay = false;

    $scope.onload = function () {
        if (sessionService.getCookie("loggedinUser") == undefined) {
            return false;
        } else {
            return true;
        }
    };



    $rootScope.$watch(function () {
        return $rootScope.errorMsg;
    }, function (newValue, oldvalue, scope) {
        if ($rootScope.errorMsg.length > 0) {
            $scope.showGreeting = true;
            $scope.labelMsg = newValue;            
            $timeout(function () {
                $rootScope.errorMsg = '';
                $scope.showGreeting = false;
            }, 5000);
        }
    }, true);

    $scope.logout = function () {
        sessionService.logout();           
        $location.path('/');
    };

});