const express=require('express')
const products= require('./data/db') 
const app=express()

app.get('/',(req,res) =>
{
    res.json(db)

})
app.get('/product/id',(req,res) =>
{
    res.json(db)

})




app.listen(5000,()=>{

 console.log("server is running")

})