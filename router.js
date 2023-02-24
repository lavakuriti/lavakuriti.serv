const express=require('express');
const app=express();
const router=express.Router();
const edits=require('./v3.js');


const user=require('./dba.js');


module.exports=(app)=>{

    var obj=[];
router.get('/',(req,res)=>{
user.find((err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        obj=data;
        res.render('index',{
        names:JSON.stringify(obj)
            
        })
    } 
})
    
});

router.post('/edit',edits.index);
router.post('/save',(req,res)=>{
        let obj=req.body;
        console.log(obj);
        let userdata=new user(obj);
        userdata.save((err,data)=>{
            if(err)
            {
                console.log(err);
            }
            console.log(data);
            user.find((err,dataa)=>{
                if(err)
                {
                    console.log(err);
                }else
                {
                res.send(dataa)
                }
            })
        })
})
router.post('/delete',(req,res)=>{
    let obj=req.body;
    console.log(obj);
    user.findOneAndDelete({names:obj.names},(err,doc)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            user.find((err,dataa)=>{
                if(err)
                {
                    console.log(err);
                }else
                {
                res.send(dataa)
                }
            })
        }
    })
});

router.post('/update',(req,res)=>{
    let obj=req.body;
    user.findByIdAndUpdate(obj._id,{$set:obj},(err,doc)=>{

        if(err)
        {
            console.log(err);
        }
        else{
            console.log("yes");
            user.find((err,dataa)=>{
                if(err)
                {
                    console.log(err);
                }else
                {
                res.send(dataa)
                }
            })
        }
    })
})

app.use(router);
}
