const express=require("express");
const mongoose=require("mongoose");

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        requires:true,
        unique:true,
        trim:true
    },
    dob:{
        type:Date,
        requires:true,
        trim:true
    },
    country:{
        type:String,
        requires:true,
        trim:true
    },
    score:{
        type:Number,
        requires:true,
        trim:true
    },
    event:{
        type:String,
        default:"100M"
    }

})

// we are creating a collection
const MenRanking=new mongoose.model("MenRanking",menSchema)

module.exports=MenRanking