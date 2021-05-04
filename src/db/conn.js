const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log(e)
})

