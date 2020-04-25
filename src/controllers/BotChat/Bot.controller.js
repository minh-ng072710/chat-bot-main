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
    req.body.Product.forEach(element => {
        Obj_Product.push({
            Id_Product: element.Id_Product,
            Product_Quantity: element.Product_Quantity,
            Size: element.Size,
        })
    });
    // console.log(bebore);
    var new_order = new Order_Infor({
        PSID: req.body.PSID,
        Custumer_Name: req.body.Custumer_Name,
        Phone: req.body.Phone,
        Address_Deli: req.body.Address_Deli,
        Product: Obj_Product,
        Note: req.body.Note,
        Payments: req.body.Payments,
        Code_Coupon: req.body.Code_Coupon
    });
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
