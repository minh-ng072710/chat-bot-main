//Libs
import express from "express";
import connectDB from "./src/config/Connect_DB";
import configEngine from "./src/config/View_Engine";
import routerInit from "./src/router/Bot_Infor";
import bodyParser from "body-parser";


const app = express();
//connect Mongodb
connectDB.connectDB();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');//địa chỉ của angular đc phép truy cập vô nodejs này
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-CSRF-Token,raw,JSON');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//config bodyParser for project
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config router for project
routerInit(app);

//config view ejs for project
configEngine(app);

//config dotenv for project
require("dotenv").config({});

// app.listen(process.env.PORT || 3000)
app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME, () => {
    console.log(`BOT SERVER IS RUNNING AT: ${process.env.APP_HOSTNAME}:${process.env.APP_PORT} `);
});
