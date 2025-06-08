import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED");
    }catch(error){
        console.error("DB connection error:", error.message);
        process.exit(1);
    }
};
        