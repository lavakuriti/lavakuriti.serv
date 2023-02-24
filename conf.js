const express=require('express');
const path=require('path');
const app=express();
module.exports=(app)=>{
app.use(express.json({
    type:"*/*"
}));
app.set('views',path.join(__dirname,'views'));
}