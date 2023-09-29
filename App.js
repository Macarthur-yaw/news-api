const express=require('express')
const app=express()
const routes=require('./Routers')
const bodyparser=require('body-parser')
app.use('/api',routes);
app.use(bodyparser.json());


app.listen(5000);


