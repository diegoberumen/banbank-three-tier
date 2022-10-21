var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// Used to serve statis files from public directory
app.use(express.static('./public'));
app.use(cors());

// Create User Account
app.get('/account/create/:name/:email/:password', function (req, res) {
  //else create user
  dal.create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

//All Accounts
app.get('/account/all', function (req, res) {
  dal.all()
    .then((docs) => {
      console.log(docs);
      res.send(docs);
    });
});


var port = 3000;
app.listen(port);
console.log('Running on port:' + port)