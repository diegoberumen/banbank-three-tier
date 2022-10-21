const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

//Connect to Mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    console.log('Connected successfully to DB server!');

    //Connect to myproject databse
    db = client.db('myproject');
});

//Create User Account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = { name, email, password, balance: 0 };
        collection.insertOne(doc, { w: 1 }, function (err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
};

//Log-In
function login(email, password) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
};

//Balance
function balance(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs)
            });
    });
};

//Balance Update
function update(email, newBalance) {
    return new Promise((resolve, reject) => {
        const customer = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: newBalance } },
                { returnOriginal: false },
                function (err, docs) {
                    err ? reject(err) : resolve(docs);
                }
            );
    });
};

//All Users
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
};

module.exports = { create, all, login, balance, update };