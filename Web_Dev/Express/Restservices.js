const app = require('express')();
const mongodb = require('mongodb').MongoClient;
const parser = require('body-parser');

const root = __dirname;

app.use(parser.urlencoded({ "extended": true })); //defining the body format...
app.use(parser.json()); //the body will be in json format..

let db;

getConnection = () => {
    const url = "mongodb://localhost/Dj"
    mongodb.connect(url, (err, res) => {
        if (err != null) {
            console.error(err.message);
            return;
        }
        db = res.db("Dj");
    })
}
getConnection();

app.get("/employee", (req, res) => {
    db.collection("employee").find().toArray((err, result) => {
        if (err != null) console.error(err.message);
        res.send(result);
    })
})

app.post("/employee", (req, res) => {
    let rec = req.body;
    db.collection("employee").insert(rec);
    res.send("Employee data inserted sucessfully!!")
})

app.delete("/employee/:empid", (req, res) => {
    const id = req.params.empid;
    db.collection("employee").remove({ "empid": id });
    res.send(`Employee data sucessfully deleted havind id -->${id} `)

})

app.put("/employee", (req, res) => {
    let rec = req.body;
    db.collection("employee").updateMany({ "empid": rec.empid }, { $set: { 'empname': rec.empname, 'empsalary': rec.empsalary } })
    res.send("Employee data has been updated!")
})

app.get("/employee/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.collection("employee").find({ "empid": id }).toArray((err, result) => {
        res.send(result);
    })
})

app.get("/EmpUI", (req, res) => res.sendFile(root + "/UIapp.html")); //when you go to the url youll get response as the UIapp webpage...

app.listen(1234, () => console.log("server is currently running at http://localhost:1234"));