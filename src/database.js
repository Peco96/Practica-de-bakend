import mongoose from "mongoose";

//const url = "mongodb://localhost:27017/cafe-branch";
const url = "mongodb+srv://Peco:peco43822@cluster0.pvqfnt9.mongodb.net/cafe-branch-c6i";
mongoose.connect(url);

const connection = mongoose.connection;
//  una vez producida la conecxion hace esto 
connection.once("open",()=>{
    console.log("BD conectado")
});