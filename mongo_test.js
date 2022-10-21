const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected!");

  if (err) {
    console.error("An error occurred connecting to MongoDB: ", err);
  } else {
    //Database Name
    const dbName = "myproject";
    const db = client.db(dbName);

    //New User
    var name = "user" + Math.floor(Math.random() * 10000);
    var email = name + "@mit.edu";

    //Insert Into Customer Table
    var collection = db.collection("customers");
    var doc = { name, email };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      console.log("Document Insert");
    });

    var customers = db
      .collection("customers")
      .find()
      .toArray(function (err, docs) {
        console.log("Collection", docs);

        //Clean Up
        client.close();
      });
  }
});
