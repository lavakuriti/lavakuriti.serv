const express=require('express')
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html>
        <head>
    
        </head>
        <body>
            <h1>home</h1>
        </body>
    </html>`)
})
app.get('/user',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html>
        <head>
    
        </head>
        <body>
            <h1>User</h1>
        </body>
    </html>`)
})
app.listen(8000);