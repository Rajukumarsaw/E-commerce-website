const mongoose=require("mongoose");
const connectToDb=mongoose.connect(process.env.PORT)

module.exports=connectToDb;