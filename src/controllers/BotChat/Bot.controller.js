import { All_Product } from "../../services/Index.services";
var Order_Infor = require("../../models/Order_Infor.model");
import mongoose from "mongoose";

var orderline = []
var alldata;

let Layout_BOT = (req, res) => {
    res.render("Bot_Infor.ejs");
};
let Test_DB = async (req, res) => {
    let data = await All_Product.Get_All()
    res.send(data)
}
let Get_ALL_Order = async (req, res) => {

}//dùng khi cần get đơn truyền ra từ DB(nếu có lưu DB không thì thôi)

let Create_Order = async (req, res) => {
    alldata = "";
    let Obj_Product = []
    req.body.orderlines.forEach(element => {
        Obj_Product.push({
            product_id: element.product_id,
            quantity: element.quantity,
            note: element.note,
        })
    });
    var new_order = new Order_Infor({
        psid: req.body.psid,
        custumer: {
            name: req.body.custumer.name,
            phone: req.body.custumer.phone
        },
        scheduleTime: null,
        delivery_address: {
            name: req.body.delivery_address.name,
            phone: req.body.delivery_address.phone,
            street: req.body.delivery_address.street,
            lat: req.body.delivery_address.lat,
            lng: req.body.delivery_address.lng
        },
        orderlines: Obj_Product,
        note: req.body.note,
        payments: req.body.payments,
        coupon: req.body.coupon,
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnRoZWNvZmZlZWhvdXNlLmNvbS9hcGkvdmVyaWZ5X21vYmlsZSIsImlhdCI6MTU4NzgyNjY3NiwiZXhwIjoxNTkwNDE4Njc2LCJuYmYiOjE1ODc4MjY2NzYsImp0aSI6Im5OMU0xMzBROEVrdURVT0siLCJzdWIiOjQ2MzgxNSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.9Jxp-yQ0-PUM6GZrOeLLQ-byMCZJnahIbpbe7dAji5g"
    });
    // console.log("new_order: " + JSON.stringify(new_order))
    alldata = await All_Product.Find_Product_By_Name(new_order)
    res.send(alldata)
    // res.redirect('http://localhost:3000/chat-bot');

    // await List_Order_Infor.push(new_order)
    // res.send(List_Order_Infor)

    // await All_Product.Create_Order_API(new_product)
    // new_product.save((err) => {
    //     if (err) {
    //         console.log("save error")
    //     } else {
    //         console.log("save succceed")
    //     }
    // })

}
let Get_Main_Data = (req, res) => {
    res.send(alldata)
}
module.exports = {
    Layout_BOT: Layout_BOT,
    Test_DB_Mongo: Test_DB,
    Get_ALL_Order: Get_ALL_Order,
    Create_Order: Create_Order,
    Get_Main_Data: Get_Main_Data
}
