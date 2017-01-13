
angular
.module('main',[])
.controller('mainController',function($rootScope,$location, Auth) {

  var main=this;
  main.loggedIn= Auth.isLoggedIn();
  Auth.getUser()
    .success(function(data) {

        main.user = data;
    });



  main.doLogin = function() {

    main.isProcessing=true;
    main.error='';
  Auth.login(main.loginData.username, main.loginData.password)
      .success(function(data) {
      if(data)
        $location.path('/users');
      else
          main.error=data.message();

 });
  };


  main.doLogout = function() {

    Auth.logout();
    main.user = {};
  //  $location.path('/');
  };


});
