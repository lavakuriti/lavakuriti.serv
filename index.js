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
            <h1>kuyo8i8o</h1>
        </body>
    </html>`)
})
app.listen(8000);