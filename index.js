const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html>
        <head>
    
        </head>
        <body>
            <h1>kwq</h1>
        </body>
    </html>`)
})
app.listen(8000);