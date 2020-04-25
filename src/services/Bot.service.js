import Bot_Model from "../models/Bot_Infor.model";
import { all } from "bluebird";
var Order_Infor = require("../models/Order_Infor.model")
const axios = require('axios').default;
var List_Order_Infor = []

let Get_Product_By_Name = async () => {
    let Data_Product = await Bot_Model.Find_Infor_Order()
    // console.log(Data_Product)
    return {
        Data_Product
    }

}

let Find_Product_By_Name = async (item) => {
    let List_ID_Product = [];
    let List_Size = [];
    let List_Quantity = [];

    let alldata;
    let Result_Final;
    await item.Product.forEach((item1 => {
        List_ID_Product.push(item1.Id_Product.toString())
    }))
    await item.Product.forEach((item2 => {
        List_Size.push(item2.Size)
    }))
    await item.Product.forEach((item3 => {
        List_Quantity.push(item3.Size.Product_Quantity)
    }))
    alldata = await Bot_Model.Find_Infor_Order(List_ID_Product)

    Result_Final = await Bot_Model.check(alldata, item, List_ID_Product, List_Size, List_Quantity)
    return Result_Final;
}

module.exports = {
    Get_All: Get_Product_By_Name,
    Find_Product_By_Name: Find_Product_By_Name
}