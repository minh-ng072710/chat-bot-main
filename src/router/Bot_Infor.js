import express from "express";
let router = express.Router();
import { Bot_Infor } from "../controllers/BotChat/Index.controller";


let routerInit = (app) => {
    router.get("/", Bot_Infor.Layout_BOT);
    router.get("/:name/:phone/:address_deli/:product_quantity/:size/:note/:payment/:code", Bot_Infor.Get_ALL_Parrams)
    router.get("/getinfor", Bot_Infor.Get_ALL_Parrams)

    app.use("/chat-bot", router)
}

module.exports = routerInit;