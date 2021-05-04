const express=require("express");
require("../src/db/conn");
const MensRanking=require("../src/models/mens")



const app=express();
app.use(express.json())
const port=process.env.PORT || 3000;




//we will handle post request

app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecord=new MensRanking(req.body);
        const insertMens=await addingMensRecord.save();
        res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e)
    }
})

// app.get("/mens",async(req,res)=>{
//     try{
//         const getMensRecord=await MensRanking.find().sort({"ranking":1});//if i deleted and added after ranking will be updown so use sort
//         res.send(getMensRecord)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

app.get("/mens/:id",async(req,res)=>{
    try{
        const params=req.params.id
        const getMensRecord=await MensRanking.findById({_id:params});
        res.send(getMensRecord)
    }catch(e){
        res.status(400).send(e)
    }
})

app.delete("/mens/:id",async(req,res)=>{
    try{
        const getMensRecord=await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMensRecord)
    }catch(e){
        res.status(500).send(e)
    }
})



app.listen(port,()=>{
    console.log(`connection is live at ${port}`)
})