const express=require('express')
const app=express()
const routes=require('./Routers')

app.use('/',routes);


app.listen(5000);


