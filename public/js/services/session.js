angular.module('session', []).factory('sessionService', ['$cookies',function($cookies) {

        var loggedinUserKey = "loggedinUser";
        
        return {
                setCookie : function(key, value) {
                    // Set the cookie
                    $cookies.put(key, value);
                },

                getCookie : function(key) {
                    // Set the cookie
                     return $cookies.get(key);
                },

                logout : function(){
                    $cookies.remove(loggedinUserKey);
                }
        }
    
    }]);