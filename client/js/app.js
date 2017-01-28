(function() {
    'use strict';

    var abacus = angular.module('myApp', [
      'authService',
      'ui.router'

    ]);

    var states = [
        {
            name: 'actor',
            state:
            {
                url:'/actor',
                templateUrl: 'pages/actor.html',
                data: {
                    text: "actor",
                    visible: false
                }
            }
        },
        {
            name: 'actress',
            state:
            {
                url:'/actress',
                templateUrl: 'pages/actress.html',
                data: {
                    text: "actress",
                    visible: false
                }
            }
        },
        {
            name: 'signin',
            state:
            {
                url:'/login',
                templateUrl: 'pages/login.html',
                data: {
                    text: "actress",
                    visible: false
                },

            }
        }

    ];


    /*.run(
     function($location) {
     $location.path('');
     }
     )*/
    abacus.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/actor');

        angular.forEach(states, function (state) {
            $stateProvider.state(state.name, state.state);
        });
    })

  /*  .controller('myCtrl', function() {


      var ctrl=this;


      ctrl.change=function () {

          ctrl.name= "Sign In";


      };

      ctrl.changeback=function (who) {


          ctrl.name=who;

    };


  });

*/
})();
