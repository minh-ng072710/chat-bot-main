import express from "express";
let router = express.Router();
import { Bot_Infor } from "../controllers/BotChat/Index.controller";

let routerInit = (app) => {
    router.get("/", Bot_Infor.Layout_BOT);
    router.get("/mongo", Bot_Infor.Test_DB_Mongo)
    router.post("/create-order", Bot_Infor.Create_Order)
    router.post("/get-order", Bot_Infor.Get_ALL_Order)
    router.get("/all-data-from-api", Bot_Infor.Get_Main_Data)
    app.use("/chat-bot", router)
}

module.exports = routerInit; 