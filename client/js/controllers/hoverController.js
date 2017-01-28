(function() {

    'use strict';
    angular
        .module('myApp')
        .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$window'];

    function myCtrl($window) {
        var ctrl = this;


        ctrl.change = function() {

            ctrl.name = "Sign In";


        };

        ctrl.changeback = function(who) {


            ctrl.name = who;

        };

        ctrl.do = function() {

            $window.alert('HI');
        };

    }

})();
