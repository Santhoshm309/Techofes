(function() {

angular

.module('userService',[])
.factory('User',function('$http') {

var userFactory = {};

userFactory.get = function(id) {

    return $http.get('techofes/users/' + id);
};

userFactory.create = function(userData) {

    return $http.post('techofes/users/',userData);
};

return userFactory;

});

})();
