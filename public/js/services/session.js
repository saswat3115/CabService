angular.module('session', []).factory('sessionService', ['$cookies',function($cookies) {

        var loggedinUserKey = "loggedinUser";
        
        return {
                setCookie : function(key, value) {
                    // Set the cookie
                    $cookies.putObject(key, value);
                },

                getCookie : function(key) {
                    // Set the cookie
                     return $cookies.getObject(key);
                },

                logout : function(){
                    $cookies.remove(loggedinUserKey);
                }
        }
    
    }]);