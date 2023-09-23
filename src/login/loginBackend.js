const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());


const mongourl = "mongodb+srv://ahmadimranworking99:aPIurQFT2EwGXn82@users.xqtyq4l.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
  useNewUrlParser: true,
}).then(()=>{console.log("Connected to Database");})
.catch((e)=>{
  console.log(e)
})

app.listen(5000,()=>{
  console.log('server is running on port 3001');
})

app.post("/post",async(req,res)=>{
  console.log(req.body)
  const {data} = req.body;

  try{ if(data === "ahmad"){
    res.send({status:"ok"})
  }
  else{
    res.send({ststus: "user not found"})
  }

}
  catch(error){
    res.send({status:"error"})
  }
 


});

