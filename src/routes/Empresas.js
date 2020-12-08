//Archivo que contiene todas las apis para trabajar con las empresa
const express= require('express');
const Router= express.Router();

var Empresa = require('../Schema/Empresa');
var User = require('../Schema/Usuario');
const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');

//Api para traer la informacion de una empresa dado su Id
Router.get("/GetEmpresa/:idEmpresa", async(req, res)=>{
    const idEmpresa= req.params.idEmpresa;
    try {
        let resp= await Empresa.findById(idEmpresa);
        res.json(resp);
    } catch (e) {
        res.json({msg: "error"});
    }
})

module.exports= Router;