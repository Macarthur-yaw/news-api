const express=require('express');
const router=express.Router();
const {Article}=require("./Connection");
const mongoose=require('mongoose')

router.get('/article',(req,res)=>{
    // res.send("Welcome to this api I am creating");
Article.find().then((result)=>res.json(result)).catch((error)=>{
    console.log(error)
})



})

router.post('/article',(req,res)=>{

    const {id,title,content}=req.body;
     
    const article2=new Article({id,title,content})
article2.save().then(()=>console.log('saved')).catch((error)=>console.log(error))
})


router.get('/article/:numberToFind', (req, res) => {
    console.log(`You have requested a ${req.params.numberToFind}`);

    const idNumber = req.params.numberToFind;

    Article.findOne({ id: parseInt(idNumber) }).then((result) =>{
        if(result){
            res.json(result)
        }else{
            res.json({"failed":"Nothing to read"})
        }
    }
        ).catch((error) => console.log(error));
})


router.get('/article/',(req,res)=>{

    const findArt=req.query.findArt;
    
    Article.findOne({title:req.query.findArt}).then((result)=>
    {
        if(result){
            res.json(result)
        }
        else{
            res.json({"false":"nothing"})
        }
    }
    ).catch((error)=>console.log("Cant find something"));
})


module.exports=router;

