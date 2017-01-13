;(function() {

'use strict';
angular
  .module('myApp');
  .controller('myCtrl',myCtrl);
  myCtrl.$inject=['$scope'];
function myCtrl($scope) {


    var ctrl=this;


    ctrl.change=function () {

        ctrl.name= "Sign In";


    };

    ctrl.changeback=function (who) {


        ctrl.name=who;

  };
}

});
