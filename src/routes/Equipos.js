//Archivo que contiene todas las apis para trabajar con los equipos
const express= require('express');
const Router= express.Router();

var Empresa = require('../Schema/Empresa');
var User = require('../Schema/Usuario');
const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');

/*Router.get('/GetEquipoColaborador/:idColaborador', async(req, res)=>{
    const idColaborador= req.params.idColaborador;
    try{
        let resp= await Equipo.find({miembros : {$all: [idColaborador]} });
        console.log(resp)
        res.json(resp)
    }catch(e){
        cons
        res.json({msg: "error"});
    }
    
})*/


module.exports=Router;