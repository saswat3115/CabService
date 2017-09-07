angular.module('MenuCtrl',[]).controller('MenuController', function($scope,$rootScope,$window, $location, sessionService){        

    $scope.isNavCollapsed = false;

    //$scope.isHomeDisplay = false;
    
    $scope.onload = function(){                           
        if(sessionService.getCookie("loggedinUser") == undefined){
            return false;
        }else{
            return true;
        }
    };
    

    $scope.logout = function () {             
        sessionService.logout();   
        //$rootScope.isHomeDisplay = false;    
        $location.path('/');
    };

});