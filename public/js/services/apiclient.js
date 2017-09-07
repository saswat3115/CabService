angular.module('ApiService', []).factory('apiService', ['$http','sessionService', function ($http, sessionService) {

    return {

        authenticate: function (data) {
            return $http.post('/api/auth', JSON.stringify(data)).then(function (result) {
                return result;
            }).catch(function (result) {
                return result;
            });
        },

        register: function (data) {
            return $http.post('/api/register', JSON.stringify(data)).then(function (result) {
                return result;
            }).catch(function (result) {
                return result;
            });
        },

        getAllUser: function () {            
            var config = {
                headers : {
                    'Authorization': sessionService.getCookie('loggedinUser').token
                }
            }
            return $http.post('/api/allusers', null, config).then(function (result) {
                return result;
            });
        }

    }

}]);