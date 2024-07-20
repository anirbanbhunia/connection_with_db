import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            //        value, error
            required:[true,"Name is require"],
            maxLength:[50,"length should less than 50 character"]
        },
        email:{
            type:String,
            unique:true
        },
        userName:{
            type: String,
            unique: true
        },
        password: String,
        age: Number
    }
)