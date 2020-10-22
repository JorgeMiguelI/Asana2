const express= require('express');
const mongo =require('mongoose');
const router = express.Router();
const path= require('path');
var multipart = require('multiparty');
const bodyParser= require('body-parser');
const { json } = require('body-parser');

//Modulos

const login =require('./src/login');
const Registro= require('./src/Registro');
const equipo =require('./src/equipo');
const { response } = require('express');



//const PORT = process.env.PORT || 3050;
const PORT=3000;

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);
app.use("/",express.static("public"));

//app.use("/",express.static("src"));



router.get("/",function(req,res){
    var index=path.resolve(__dirname+"/public","index.html");
    res.sendFile(index);
});

router.get("/principal",function (req,res) {
    var index=path.resolve(__dirname+"/public","index.html");
    res.sendFile(index);
})


app.post("/equipo",function(req,res){
    var respuesta=equipo.ProcesarRequest(req);
    respuesta.then((response)=>{
        console.log(response);
        console.log("------End Equipo-----");
        res.send(response);
    }).catch((response)=>{
        console.log(response);
        console.log("------End Equipo-----");
        res.send(3);
    });


});

app.post('/login',function(req,res){
   var respuesta=login.ProcesarInicio(req);

   respuesta.then(function (response) {
        console.log("-----End Login----------");
        console.log(response);
       res.send(response);
       
   }).catch((response)=>{
    console.log(response);
    console.log("-----End Login----------");

    res.send(response);
   });

    

    
    
    
   /*  console.log(req.query);
    console.log(req.body);
    console. log(req.body.correo);*/
    
    
   // res.send("Correcto");
});

app.get("/login",function(req,res){
 
    console.log("---------------------------------------");
    //console.log(req);
    console.log(req.body);
    console.log(req.body.correo);
    
    console.log("---------------------------------------");
    res.send("Correcto");
});

app.post('/registro',function(req,res){
    var respuesta=Registro.ProcesarInicio(req);

   respuesta.then(function (response) {
        console.log("Response:"+ response);
        console.log("-----End Registro----------");
        
       res.send(response);
       
   });
});

app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT);
});



