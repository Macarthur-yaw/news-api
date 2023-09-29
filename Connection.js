const mongoose=require('mongoose');
require('dotenv').config();


const mongoURI=process.env.MONGODB_URI;
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected successfully ")
}).catch((error)=>console.log("Can not connect"));

const articleSchema=new mongoose.Schema({
    id:Number,
    title:String,
    content:String
})

const Article=mongoose.model('Article',articleSchema);
const article1=new Article({
    id:22,
    title:"THe boy is coming to this place",
    content:"I can not do it "
})

article1.save().then(()=>{console.log("Item has been saved")})
.catch((error)=>console.log("Item has not been saved"))
;





module.exports={Article};
