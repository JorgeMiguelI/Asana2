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

//Api para obtener los proyectos dado el Id del equipo
Router.get("/GetProyectosByTeam/:idEquipo", async(req, res)=>{
    const idEquipo= req.params.idEquipo;
    try {
        let resp= await Proyecto.find({equipo: idEquipo});
        res.json(resp);
    } catch (e) {
        res.json({msg: "error"});
    }
})

//Api para eliminar un Equipo
Router.delete("/DeleteEquipo/:idEquipo", async(req, res)=>{
    const idEquipo= req.params.idEquipo;
    try {
        let resp4= await Equipo.deleteOne({_id: idEquipo});
        res.json({msg: "Ok"});
    } catch (e) {
        res.json({msg: "error"});
    }
});

//Api para actualizar la informacion de un equipo
Router.put("/UpdateTeam", async(req, res)=>{
    const team= req.body.data;
    try{
        let resp= await Equipo.updateOne({_id: team.id}, team);
        res.json(resp); 
    }catch(e){
        res.json({msg: "error"});
    }
})

module.exports=Router;