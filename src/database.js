import mongoose from "mongoose";

const url = "mongodb://localhost:27017/cafe-branch";

mongoose.connect(url);

const connection = mongoose.connection;
//  una vez producida la conecxion hace esto 
connection.once("open",()=>{
    console.log("BD conectado")
});