require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const employeeModule = require("./app/api/employee");
//const loginModule = require("./app/api/login");
//const hrRouter = require('./app/api/hr/route');
//const express = require('express');


const PORT = process.env["PORT"];


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let router = express.Router();
app.get("/healthcheck", (req, res) => {
    res.status(200).json({ "message": "ok" });
});

app.use("/api", employeeModule);
//app.use("/api", hrModule);
//app.use("/api", loginModule);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));    