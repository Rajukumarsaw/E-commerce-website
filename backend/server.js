const app=require("./app");
const dotenv=require('dotenv');



app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at https//localhost:${process.env.PORT}`)
});

