//Archivo donde estaran todas las apis para trabajar con los proyectos
const express= require('express');
const Router= express.Router();

var Empresa = require('../Schema/Empresa');
var User = require('../Schema/Usuario');
const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');
const Tarea = require('../Schema/Tarea');


//Api Para obtener todos los proyectos dado el Id de una Empresa
Router.get('/GetProyectos/:id', async (req, res)=>{
    console.log(req.params);
    let idOrga= req.params.id;
    let Equipos=[];
    let ListaProyectos=[];
    let Proyectos=[];

    //Bucsamos Los equipos que pertenecen a la Organizacions
    await Equipo.find({organizacion: idOrga}, (err, data)=>{
        if(err){
            res.json({msg: "Error"});
        }else{
            //res.json(data);
            Equipos=data;
            //console.log(data);
        }
    });
    //Ahora buscamos todos los proyectos referentes a estos equipos
    for (let Eq of Equipos){
        await Proyecto.find({equipo: Eq._id}, (err, data)=>{
            if(err){
                res.json({msg: "Error"});
            }else{
                ListaProyectos.push(data);
            }
        });
    }
    for(let i=0;i<ListaProyectos.length;i++){
        for(let item of ListaProyectos[i]){
            Proyectos.push(item);
        }
    }
    //console.log(Proyectos);
    //console.log(ListaProyectos);
    res.json(Proyectos);
})

//Api Para obtener los miembros de un proyecto dado su Id
Router.get('/GetMiembros/:idproyecto', async (req, res)=>{
    let idProyecto= req.params.idproyecto;
    let proyecto;
    let equipo;
    let ListaColaboradores=[];
    //Obtenemos el equipo asignado al proyecto especifico
    await Proyecto.findById(idProyecto, (err, data)=>{
        if(err){
            res.json({msg: "error"});
        }else{
            proyecto=data
            //res.json(proyecto);
        }
    })
    //console.log(proyecto);
    //Ahora buscamos el Equipo al que esta asignado dicho Proyecto
    await Equipo.findById(proyecto.equipo, (err, data)=>{
        if(err){
            res.json({msg: "error"});
        }else{
            equipo=data;
            //res.json(equipo);
        }
    })
    //Ahora mandamos a los colaboradores que pertenecen a dicho equipo
    let listaM= JSON.parse(equipo.miembros[0]);
    for(let item of listaM){
        await User.findById(item.Id, (err, data)=>{
            if(err){
                res.json({msg:"error"});
            }else{
                ListaColaboradores.push(data);
            }
        })
    }
    res.json(ListaColaboradores);
    //console.log(ListaColaboradores); 
})

//API para obtener los proyectos por Id
Router.get('/GetProyectoById/:idProyecto', async (req, res)=>{
    const idProyecto= req.params.idProyecto;
    await Proyecto.findById(idProyecto, (err, data)=>{
        if(err){
            res.json({msg: "Error"});
        }else{
            //console.log(data)
            res.json(data);
        }
    })

})

//API para traer las tareas dado el id del Proyecto
Router.get("/GetTaskProject/:idProyecto", async(req, res)=>{
    const idProyecto= req.params.idProyecto;
    try{
        let resp= await Tarea.find({proyecto: idProyecto})
        res.json(resp);
    }catch(e){
        res.json({msg: "error"});
    }
})

//Api para traer proyectos dado el id del Colaborador
Router.get("/GetEquipoColaborador/:idColaborador", async (req, res)=>{
    const idColaborador= req.params.idColaborador;
    let ListaEquipos= [];
    let ListaProyectos= [];
    try{
        let resp= await Equipo.find();
        for(let team of resp){
            let Listamiembros= JSON.parse(team.miembros);
            for(let miembro of Listamiembros){
                if(miembro.Id==idColaborador){
                    ListaEquipos.push(team);
                }
            }
        }
        console.clear();
        for(let team of ListaEquipos){
            let proyectoList= await Proyecto.find({equipo: team._id})
            //console.log(proyecto);
            for(let proyecto of proyectoList){
                ListaProyectos.push(proyecto);
            }       
        }
        //console.log(ListaProyectos);
        res.json(ListaProyectos);
    }catch(e){
        res.json({msg: "error"});
    }
});

//Api para actualizar Proyecto
Router.put("/UpdateProyecto", async(req, res)=>{
    const proyecto= req.body.data;
    try{
        let resp= await Proyecto.update({_id: proyecto.id}, proyecto);
        res.json(resp); 
    }catch(e){
        console.log(e)
        res.json({msg: "error"});
    }
})

//Api para eliminar un proyecto
Router.delete("/DeleteProyecto/:idProyecto", async (req, res)=>{
    const idProyecto= req.params.idProyecto;
    let ProyectoFind;
    try{
        //Buscamos el proyecto
        let resp= await Proyecto.findById(idProyecto);
        ProyectoFind= resp;
        //Eliminamos las tareas asignadas a ese proyecto
        let resp3= await Tarea.deleteMany({proyecto: idProyecto});
        //console.log(resp3); al imprimir en el campo deleteCount son las tareas eliminadas

        //Por ultimo eliminamos el proyecto
        let resp4= await Proyecto.deleteOne({_id: idProyecto});
        //console.log("Se ha elimado la tarea");
        res.json({msg: "Ok"});
        
    }catch(e){
        res.json({msg: "error"});
    }
})

//Api para traer los proyectos dado el ID de un equipo
Router.get("/GetProyectosByTeam/:idEquipo", async(req, res)=>{
    const idEquipo= req.params.idEquipo;
    try{
        let resp= await Proyecto.find({equipo: idEquipo});
        res.json(resp);
    }catch(e){
        res.json({msg: "error"});
    }
});

//Api para traer los miembros de un equipo dado el ID del equipo
Router.get("/GetMiembrosByTeam/:idEquipo", async(req, res)=>{
    const idEquipo= req.params.idEquipo;
    let ListaT= [];
    let ListaMiembros= [];
    try {
        let resp= await Equipo.findById(idEquipo);
        ListaT= JSON.parse(resp.miembros);
        for(let miembro of ListaT){
            let user= await User.findById(miembro.Id);
            ListaMiembros.push(user);
        }
        res.json(ListaMiembros)
    } catch (e) {
        res.json({msg: "error"});
    }
});



module.exports=Router;