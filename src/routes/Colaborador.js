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

//Api para actualizar el Rol de un usuario
Router.get('/UpdateRol/:idColaborador', async (req, res)=>{
    const idColaborador= req.params.idColaborador;
    try{
        let resp= await User.update({_id: idColaborador}, {rol: 'L'});
        res.json(resp);
    }catch(e){
        res.json({msg: "error"});
    }
   

})


module.exports=Router;