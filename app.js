(function(){

   var express = require('express');
   var mongoose = require('mongoose');
   var app = express();
   mongoose.createConnection('mongodb://localhost:27017/users');
   var path = require('path');
   app.use(express.static(__dirname + '/client'));
   app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
   });
   var routes = require('./server')(app);


   app.listen(8080);
   console.log("Server is running at port  : "+ 8080);
   module.exports = app;

})();
