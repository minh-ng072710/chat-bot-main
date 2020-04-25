import mongoose from "mongoose";
import bluebird from "bluebird";
require("dotenv").config();
let connectDB = async () => {
    mongoose.bluebird = bluebird;
    var mongoDB = process.env.MONGO_HOST + process.env.MONGO_PORT + process.env.MONGO_DB_NAME
    // console.log(mongoDB)
    // var mongoDB = 'mongodb://10.9.53.3:27017/Sale';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    //Ép Mongoose sử dụng thư viện promise toàn cục
    mongoose.Promise = global.Promise;
    //Lấy kết nối mặc định
    return mongoose.connection;
};

module.exports = { connectDB: connectDB };
