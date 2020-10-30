//Arhchivo donde se tendran todas las apis para trabajar con las tareas y subtareas
const express= require('express');
const Router= express.Router();


const Tarea= require('../Schema/Tarea');

//Api para registrar Subtareas
Router.post('/addSubtarea', async (req, res)=>{
    console.log(req.body.data);
    const subTar= new Tarea(req.body.data);
    try{
        const resp= await subTar.save()
        res.json({idSubtarea: resp._id})
        console.log(resp)
    }catch(e){
        res.json({msg: "error"});
        console.log(e);
    }
    
    
    //console.log(subTarea);
    //GG¿uardamos la subtarea

})


module.exports=Router;