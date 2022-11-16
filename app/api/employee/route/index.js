const express= require("express");
let employeeRouter = express.Router();
const {getEmployee}=require("../controller/get");

employeeRouter.get("/get",getEmployee)


module.exports= employeeRouter;