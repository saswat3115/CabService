angular.module('ChatCtrl',[]).controller('ChatController', function($scope, $location, apiService, sessionService){        

    $scope.username = sessionService.getCookie('loggedinUser').fname;   
    console.log(sessionService.getCookie('loggedinUser').fname);

    $scope.allusers = [];

    $scope.getAll = function(){
        apiService.getAllUser().then(function(result){
            console.log(JSON.stringify(result));
            $scope.allusers = result.data;
        });
    }

});