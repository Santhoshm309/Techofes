(function() {

angular

.module('authService',[])
.factory('AuthToken', function($window) {

var authTokenFactory = {};
authTokenFactory.getToken = function() {

  return $window.localStorage.getItem('token');
};

authTokenFactory.setToken = function(token) {

if(token)
      $window.localStorage.setItem('token',token);
else
      $window.localStorage.removeItem('token');

};

return authTokenFactory;


})



.factory('Auth', function($http , $q, AuthToken) {

var authFactory = {};

authFactory.login = function(username,password) {

return $http.post('/api/authenticate', {

username: username,
password: password
})
            .success(function(data) {
                AuthToken.setToken(data.token);
                  return data;

            });

};

authFactory.logout = function () {

  AuthToken.setToken();
};


authFactory.isLoggedIn = function() {


  if(Auth.getToken())
    return true;
  else
    return false;

};


return authFactory;

})


.factory('AuthInterceptor', fucntion ($q, $location ,AuthToken) {


  var interceptorFactory = {};

  interceptorFactory.request = function(config) {

var token = AuthToken.getToken();

if(token)

        config.headers['x-access-token'] = token;
return config;

  };


  interceptorFactory.responseError = function(response) {

   // if our server returns a 403 forbidden response
   if (response.status == 403) {
   AuthToken.setToken();
   $location.path('/login');
   }

   // return the errors from the server as a promise31 return $q.reject(response);
   };

   return interceptorFactory;

});


}();
