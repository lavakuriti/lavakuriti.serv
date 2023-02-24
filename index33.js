const express=require('express');
const config=require('./conf.js');
const rout=require('./router.js');
const app=express();
app.set('view engine','ejs');
config(app);
rout(app);
app.listen(8000);