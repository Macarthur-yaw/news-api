const mongoose=require('mongoose');
require('dotenv').config();


const mongoURI=process.env.MONGODB_URI;
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected successfully ")
});

const newsSchema=new mongoose.Schema({
    id:Number,
    title:String,
    content:String,
    author:String,
    publicationDate:Date,
    Category:String,
    source:String,

})

const Article=mongoose.model("Article",newsSchema);


module.exports={Article};
