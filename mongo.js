const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fyp-login")
.then(()=>{
    console.log("DB Connected");
})
.catch(()=>{
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection