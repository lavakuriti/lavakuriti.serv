const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://lava:98490@cluster0.wczk43v.mongodb.net/test");
const schema=mongoose.Schema;
const userschem=new schema({
    _id:String,
    names:String
});
const model=mongoose.model("dates",userschem);
module.exports=model;

