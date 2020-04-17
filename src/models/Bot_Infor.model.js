import mongoose from "mongoose";

const Bot_Infor_Shema = new mongoose.Schema({
    Custumer_Name: { type: String, trim: true, required: "" },
    Phone: Number,
    Address_Deli: String,
    Product_Quantity: Number,
    Size: String,
    Note: String,
    Payments: String,
    Code: String,
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
});

Bot_Infor_Shema.statics = {
    /**
   *Create_Order
   * @param {object} item
   */
    createProduct(item) {
        return this.create(item);
    },
    /**
    *Get Infor Form DB
    * @param {object} item
    */
    Find_Infor_Order() {
        return this.find().sort({ createdAt: -1 }).exec();
    },
}