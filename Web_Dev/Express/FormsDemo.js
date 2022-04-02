const express = require('express')
const parser = require('body-parser') //this parses the body of data into plain text...

const app = express();
const root = __dirname;
app.use(parser.urlencoded({ extended: false })) //this extracts the data from the body as body objext...
app.get("/HomePage", (req, res) => res.sendFile(root + "/HomePage.html"))
app.get("/Registration", (req, res) => res.sendFile(root + "/Registration.html"))
app.get("/AfterRegistration", (req, res) => {
    const name = req.query.txtName;
    const Email = req.query.txtEmail;
    const sal = req.query.txtSalary;
    res.send(`${name} has successfully registered, conformation message has been mailed to ${Email}`);
})

app.post("/AfterRegistration", (req, res) => {
    if (req.body == null) {
        res.send("No data posted");
    } else {
        const name = req.body.txtName;
        const Email = req.body.txtEmail;
        const sal = req.body.txtSalary;
        res.send(`${name} has successfully registered, conformation message has been mailed to ${Email}`)
    }
})

app.listen(1234, () => console.log("Server is available at 1234"));