const express= require('express');
const router = express.Router();


//Modulos

const login =require('../apis/login');
const Registro= require('../apis/Registro');
const equipo =require('../apis/equipo');
const proyecto = require('../apis/proyecto');



router.post("/equipo",function(req,res){
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

router.post("/proyecto",function(req,res){
    var respuesta=proyecto.ProcesarRequest(req);
    respuesta.then((response)=>{
        console.log(response);
        console.log("------End Proyecto-----");
        res.send(response);
    }).catch((response)=>{
        console.log(response);
        console.log("------End Proyecto-----");
        res.send(4)
    });
});

router.post('/login',function(req,res){
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

router.get("/login",function(req,res){
 
    console.log("---------------------------------------");
    //console.log(req);
    console.log(req.body);
    console.log(req.body.correo);
    
    console.log("---------------------------------------");
    res.send("Correcto");
});

router.post('/registro',function(req,res){

    var respuesta=Registro.ProcesarInicio(req);

   respuesta.then(function (response) {
        console.log("Response:"+ response);
        console.log("-----End Registro----------");
        
       res.send(response);
       
   });
});

module.exports=router;