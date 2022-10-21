var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const { response } = require("express");

// Used to serve statis files from public directory
app.use(express.static("./public"));
app.use(cors());

// Create User Account
app.get("/account/create/:name/:email/:password", function (req, res) {
  //else create user
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

//Log-In
app.get("/account/login/:email/:password", function (req, res) {
  dal.login(req.params.email)
    .then((user) => {
      // if user exists, check password
      if (user.length > 0) {
        if (user[0].password === req.params.password) {
          res.send(user[0]);
        } else {
          res.send({ "LoginFailed": "Wrong Password" });
        }
      } else {
        res.send({ "LoginFailed": "User Not Found" });
      }
    });
});

//Balance
app.get("/account/balance/:email", function (req, res) {
  dal.balance(req.params.email)
    .then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

//Update Balance
app.get('/account/update/:email/:newBalance', function (req, res) {
  var updatedBalance = Number(req.params.newBalance);
  dal.update(req.params.email, updatedBalance)
    .then((response) => {
      console.log(response)
      res.send(response)
    });
});

//All Accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

var port = 3000;
app.listen(port);
console.log("Running on port:" + port);
