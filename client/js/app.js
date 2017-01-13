(function() {
    'use strict';

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
        }
    ];

    var abacus = angular.module('myApp', [
        'ui.router',
        'authService',
        'userService',
        'main'
    ]);
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
        $locationProvider.html5Mode(true);
    });

    abacus.controller('myCtrl', function() {
        var ctrl=this;


        ctrl.change=function () {

            ctrl.name= "Sign In";


        };

        ctrl.changeback=function (who) {


            ctrl.name=who;


        };

    });

})();
