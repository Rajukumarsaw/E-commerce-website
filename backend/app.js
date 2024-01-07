const express=require("express");
const connectToDb= require('./db/db')
const app=express();
connectToDb();
require('dotenv').config();


module.exports=app;