const express= require('express');
const bodyParser= require('body-parser');
var mongoose = require('mongoose');
const router=require('./src/routes/routes');




//const PORT = process.env.PORT || 3050;
const PORT=8080;

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



 mongoose.connect("mongodb://localhost/Asana");




app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT);
});



