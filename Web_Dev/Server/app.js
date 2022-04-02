const express = require('express');
const app = express();
require('dotenv').config;
const mongoose = require('mongoose');
require("./DB/Conn");
const users = require('./Models/userSchema');
const cors = require('cors');
const router = require('./Routes/Router');

app.use(cors());
app.use(express.json());
app.use(router);
const port = 8003;
app.listen(port, () => { console.log(`server is listening at port ${port}`) });