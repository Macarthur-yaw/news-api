const express=require('express')
const app=express()
const routes=require('./Routers')
const bodyparser=require('body-parser')

app.use(bodyparser.json());
app.use('/api',routes);
app.use(express.static('./Public'))

app.listen(5000);


