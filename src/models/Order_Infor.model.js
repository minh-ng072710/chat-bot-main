import mongoose from "mongoose";
const Order_Infor_Schema = new mongoose.Schema({
    psid: { type: String, trim: true },
    custumer: {
        name: { type: String, required: "" },
        phone: { type: Number, required: "" }
    },
    scheduleTime: { type: String, trim: true },
    delivery_address: {
        name: { type: String, required: "" },
        phone: { type: Number, required: "" },
        street: { type: String, trim: true },
        lat: { type: Number },
        lng: { type: Number }
    },
    orderlines: [{
        product_id: { type: Number },
        quantity: { type: Number },
        note: { type: String, trim: true }
    }],
    note: { type: String, trim: true },
    payments: { type: String, trim: true },
    coupon: { type: String, trim: true },
    access_token: { type: String, trim: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
});
module.exports = mongoose.model("Order_Infor", Order_Infor_Schema)
