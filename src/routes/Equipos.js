//Archivo que contiene todas las apis para trabajar con los equipos
const express= require('express');
const Router= express.Router();

var Empresa = require('../Schema/Empresa');
var User = require('../Schema/Usuario');
const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');

//Api para traer los equipos dado el id de la empresa
Router.get("/GetEquiposByEmpresa/:idEmpresa", async(req, res)=>{
    const idEmpresa= req.params.idEmpresa;
    try{
        let resp= await Equipo.find({organizacion: idEmpresa});
        res.json(resp);
    }catch(e){
        res.json({msg: "error"});
    }
});

//Api para traer un equipo dado su Id
Router.get("/GetEquipoById/:idEquipo", async(req, res)=>{
    const idEquipo= req.params.idEquipo;
    try {
        let resp= await Equipo.findById(idEquipo);
        res.json(resp);
    } catch (error) {
        res.json({msg: "error"});
    }
})

module.exports=Router;