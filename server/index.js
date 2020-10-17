/*const { request } = require('express');
const express=require('express')
const myserver=express();
const mongoose =require('mongoose');
const Contact= require('./contact.js')

mongoose.connect('mongodb://localhost/benoit-brand',{ useUnifiedTopology: true, useNewUrlParser: true }).then(console.log("connected to database"))




myserver.listen(3000,console.log("i am in event"));*/






const express =require('express')
constpath =require('path')
const handlebars =require ('handlebars')
const  exphbs =require('exphbs')
const { parse, dirname } = require('path')
const{allowInsecurePrototypeAccess}=require(@handlebars/allow-prototype-access)
const  bodyparser =require('body-parse')

var app =express()

app.use(bodyparser.urlencoded ({extended :false}))
app.use(bodyparser.json())

app.get('/',(req, res) => {
    res.send(
        <h2>welcome to my database!!</h2>
        <h3><click to get the <b> <a href= "contact/list">Database </a></b></h3>),
});
app.set('views', 'path.join(' -dirname,  './views/)



app.engine ('hbs'exphbs({
    handlebars:allowInsecurePrototypeAcces(handlebars),
    extname::'hbs',
    defaultlayout: 'mainlayout',
    layoutsDir_dirname + '/views/layouts/'
}))





app.set('view engine', 'hbs')








app.listen(3000, () => {
    console.log("server started at port 3000");

})


myserver.get("/myserver/home",(req,res)=>{res.send(" i am ready to respond")})

myserver.post("/myserver/login",(req,res)=>{res.send(" welcome")})









