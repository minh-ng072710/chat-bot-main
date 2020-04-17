import mongoose from "mongoose";
import bluebird from "bluebird";

let connectDB = () => {
    mongoose.bluebird = bluebird;
    let URI = `mongodb+srv://giaminh:CkhLInJdpddOLEHD@cluster0-zjg82.gcp.mongodb.net/CHAT_BOT?retryWrites=true&w=majority`;
    return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
        if (err) {
            console.log("Have errors happen while connect to MongoDB")
        }
        console.log("Connet to MongoDB succeed")
    });
};

module.exports = connectDB;