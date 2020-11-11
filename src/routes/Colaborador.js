//Arhcio donde estaran todas las apis para trabajar con los Colaboradores
const express= require('express');
const Router= express.Router();

var Empresa = require('../Schema/Empresa');
var User = require('../Schema/Usuario');
const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');

Router.get('/GetColaborador/:idColaborador', async (req, res)=>{
    const idColaborador= req.params.idColaborador;
    await User.findById(idColaborador, (err, data)=>{
        if(err){
            res.json({msg: "Error"})
        }else{
            res.json(data);
        }
    })
})


module.exports=Router;