const express= require("express");
const employeeRouter=require("./route");
let employeeModule = express.Router();

employeeModule.use("/employee",employeeRouter);

module.exports= employeeModule;