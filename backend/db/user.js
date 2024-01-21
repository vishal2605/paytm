const mongoose=require("mongoose");
const { string } = require("zod");

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const User=mongoose.model('User',userSchema);
module.exports= User;