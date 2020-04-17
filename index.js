//Libs
import express from "express";
import connectDB from "./src/config/Connect_DB";
import configEngine from "./src/config/View_Engine";
import routerInit from "./src/router/Bot_Infor";
import bodyParser from "body-parser";


const app = express();
//connect Mongodb
connectDB();

//config bodyParser for project
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config router for project
routerInit(app);

//config view ejs for project
configEngine(app);

//config dotenv for project
require("dotenv").config({});


app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME, () => {
    console.log(`BOT SERVER IS RUNNING AT: ${process.env.APP_HOSTNAME}:${process.env.APP_PORT} `);
});
