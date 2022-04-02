const mongodb = require('mongodb').MongoClient
const dburl = 'mongodb://localhost/Dj' //location of the data base...

let database;

mongodb.connect(dburl, (err, mgl) => {
    database = mgl.db("Dj") //to acquire the database in the location...
    database.collection("employee").find().toArray((err, res) => {
        res.forEach((value) => console.log(value.empname));
    })
})