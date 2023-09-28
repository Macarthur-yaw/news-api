const mongoose=require('mongoose');
require('dotenv').config();

const url="mongodb+srv://arthurkevin1260:Zl7rH2aqRTOvfMf3@cluster0.d4rjoj9.mongodb.net/?retryWrites=true&w=majority"

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
