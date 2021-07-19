import express from "express";
import morgan from "morgan";
import allRoutes from "./allRoutes";

const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

//RUTAS
app.use("/Exa", allRoutes); 

// const allroutes = require('./allRoutes')
// app.use(allroutes);


const { pg } = require("./database");
// const nodemailer = require('nodemailer');


//DATABASE

export default app;