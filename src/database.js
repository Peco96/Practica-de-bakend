import mongoose from "mongoose";

const url = "mongodb://localhost27017/cafe-branch";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("BD conectado")
});