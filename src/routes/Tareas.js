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
        //console.log(resp)
    }catch(e){
        res.json({msg: "error"});
        console.log(e);
    }
    
    
    //console.log(subTarea);
    //GG¿uardamos la subtarea
})

//Api para Guardar una Tarea
Router.post('/addTarea', async(req, res)=>{
    //console.log(req.body.data);
    const tarea= new Tarea(req.body.data);
    try{
        const resp=await tarea.save();
        res.json(resp);
    }catch(e){
        res.json({msg: "error"});
    }
})
//Api para Eliminar Una tarea
Router.delete('/deleteTarea/:idTarea', async(req, res)=>{
    const idTarea= req.params.idTarea;
    //console.log(idTarea);
    try{
        let resp= await Tarea.deleteOne({_id: idTarea});
        res.json(resp);
    }catch(e){
        res.json({msg:"Error"});
    }
});
//Api para Traer mis tareas dado mi Id de colaborador
Router.get("/GetMisTareas/:idColaborador", async(req, res)=>{
    const idEncargado= req.params.idColaborador;
    //console.log(idEncargado);
    try{
        let resp= await Tarea.find({encargado: idEncargado});
        console.log(resp);
        res.json(resp);
    }catch(e){
        res.json({msg: "Error"});
    }
})

Router.get("/GetTareaPadre/:idSubtarea", async(req, res)=>{
    const idSubtarea= req.params.idSubtarea;
    try{
        let resp= await Tarea.find({subtareas: {$all: [idSubtarea]} });
        res.json(resp[0])

    }catch(e){
        res.json({msg: "Error"});
    }
})

//Api para Traer tarea dado el Id de la tarea
Router.get("/GetTarea/:idTarea", async(req, res)=>{
    const idTarea= req.params.idTarea;
    //console.log(idEncargado);
    try{
        let resp= await Tarea.find({_id: idTarea});
        res.json(resp[0]);
    }catch(e){
        res.json({msg: "Error"});
    }
})

//Api para traer Subtareas dado el id de la Subtarea
Router.get("/GetSubtarea/:idSubtarea", async(req, res)=>{
    const idSubtarea= req.params.idSubtarea;
    try{
        let resp= await Tarea.find({_id: idSubtarea});
        res.json(resp[0]);
    }catch(e){
        res.json({msg: "Error"});
    }

})



module.exports=Router;