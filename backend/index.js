const express = require("express");
const mongoose=require("mongoose");

const app=express();

mongoose.connect("mongodb+srv://vishal2001lohar:Vishal123@cluster0.x3os1qm.mongodb.net/",{dbName:"paytmwallet"});





