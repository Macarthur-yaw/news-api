const express=require('express');
const router=express.Router();
const {Article}=require("./Connection");


router.get('/article',(req,res)=>{
    res.send("Welcome to this api I am creating");

})


module.exports=router;

