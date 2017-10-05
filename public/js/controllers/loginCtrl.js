angular.module('LoginCtrl',[]).controller('LoginController', function($scope,$rootScope, $location, apiService, sessionService){        

    var homePath = "/home";
    
    $scope.redirectToSignup = function(){
        $location.path('/signup');
    }

    $scope.redirectToHomeIfCookiesAvailabe = function(){        
        if(sessionService.getCookie("loggedinUser") != undefined){
            $location.path(homePath);
        }
    }

    $scope.user = {};
    

    $scope.auth = function() {    
        //alert("cookie " + sessionService.getCookie());    
        apiService.authenticate($scope.user).then(function(result){                    
            if(result.status == "200"){                                
                sessionService.setCookie("loggedinUser", result.data);               
                $location.path(homePath);
            }else{                                                
                $rootScope.errorMsg = "Unable to login ! " + result.status;                
            }
        });
    }
});