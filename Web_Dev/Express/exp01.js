const express = require('express') //loads express module..

const app = express(); //creates an express application...
const root = __dirname;
app.get("/HomePage", (req, res) => res.sendFile(root + "/HomePage.html"))
app.listen(1234);

/*Steps for creating working express application :-
1. create a folder based on the application name you want to create...
2.Install express in your directory...
*/