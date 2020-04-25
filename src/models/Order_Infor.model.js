import mongoose from "mongoose";
const Order_Infor_Schema = new mongoose.Schema({
    PSID: { type: String, trim: true },
    Custumer_Name: { type: String, trim: true, required: "" },
    Phone: { type: Number },
    Address_Deli: { type: String, trim: true },
    Product: [{
        Id_Product: mongoose.Types.ObjectId,
        Product_Quantity: Number,
        Size: Number
    }],
    Note: { type: String, trim: true },
    Payments: { type: String, trim: true },
    Code_Coupon: { type: String, trim: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
});

module.exports = mongoose.model("Order_Infor", Order_Infor_Schema)
