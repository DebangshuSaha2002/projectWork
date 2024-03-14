// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from './db/index.js'

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at PORT ${process.env.PORT}`);
    })
    console.log("Server Running on Port : ",process.env.PORT);
})
.catch((err)=>{
    console.log("Mongo DB Connection Failed : ",err);
})