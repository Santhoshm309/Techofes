(function() {

    'use strict';
    angular
        .module('myApp')
        .controller('mainController', mainController);
    mainController.$inject = ['$window', '$rootScope', '$location', 'Auth'];

    function mainController($window, $rootScope, $location, Auth) {
        var main = this;
         main.loginData = {};

        main.loggedIn = Auth.isLoggedIn();
        Auth.getUser()
            .then(function(data) {

                main.user = data;
            });



        main.doLogin = function() {
            
             var login = {
                //params : {
                username: main.username,
                password: main.password
             
            }
            
            
            //$window.alert('Hi');
            main.isProcessing = true;
            main.error = '';
            Auth.login(login)
                .then(function(response) {
                    
                    if(response.status==200)
                        console.log("login successful");
                    else
                        console.log("login unsucccessful");
                  //  $location.path('/user'); // if a user successfully logs in, redirect to users page29 $location.path('/users');
                });

        };

        main.doLogout = function() {


            Auth.logout();
            main.user = {};
            $location.path('/');
        };


    }

})();
