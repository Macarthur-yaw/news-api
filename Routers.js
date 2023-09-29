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


router.get('/article/search?q=:query',(req,res)=>{

})


module.exports=router;

