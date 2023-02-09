const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const musicRoutes=require('./routes/music')


const app=express()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');// 어떤 도메인을 허용하는지
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
    next()
})

app.use(bodyParser.json())

app.use("/api/music",musicRoutes)


app.listen(4001)