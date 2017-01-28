(function() {

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
            
           

            //$window.alert('Hi');
            main.isProcessing = true;
            main.error = '';
            Auth.login(loginData)
                .then(function(loginData) {

                    $location.path('/user'); // if a user successfully logs in, redirect to users page29 $location.path('/users');
                });

        };

        main.doLogout = function() {


            Auth.logout();
            main.user = {};
            $location.path('/');
        };


    }

})();
