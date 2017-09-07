angular.module('SignupCtrl',[]).controller('SignupController', function($scope, $location, apiService,sessionService){
    $scope.user = {};

    $scope.register = function(){
        apiService.register($scope.user).then(function(result){
            if(result.status == 200){
                sessionService.setCookie('loggedinUser', result.data);
                $location.path('/home');
            }else{
                alert("Email id already exists !" + result.status);
            }
        });
    }
});