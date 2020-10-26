const express= require('express');
const bodyParser= require('body-parser');
var mongoose = require('mongoose');
const router=require('./src/routes/routes');
const cors=require('cors');



//const PORT = process.env.PORT || 3050;
const PORT=8080;

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use(cors());
app.use(router);
 
mongoose.connect("mongodb://localhost/Asana");




app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT);
});



