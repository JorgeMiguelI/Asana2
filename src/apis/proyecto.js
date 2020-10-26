var multipart = require('multiparty');
var User = require('../Schema/Usuario');

const Equipo = require('../Schema/Equipo');
const Proyecto = require('../Schema/Proyecto');
const equipo = require('./equipo');
const { response } = require('express');

module.exports={
    ProcesarRequest:function(req){
        console.log("-------- Inicio de Proyecto--------");
        return new Promise((resolveG,rejectG)=>{
            var form=new multipart.Form();

            form.parse(req,(err,datos,archivos)=>{
                console.log(datos);
                switch (datos.Operation[0]){
                    case '1':{
                        Equipo.find({organizacion:datos.IdEmpresa[0]},(err,doc)=>{
                            console.log("-*-*-*-*-* Busqueda finalizada -*-*-*-*-");
                            resolveG(doc);
                        });
                        break;
                    }
                    case '2':{
                        Equipo.findById(datos.IdEquipo[0],(err,doc)=>{
                            console.log("-*-*-*-*-* Busqueda finalizada -*-*-*-*-");
                            var miembrosInfo=new Array();
                            var miembros1=JSON.parse(doc.miembros);
                            var esperar=new Promise((resolveE,rejectE)=>{
                                
                                User.find({},(err,doc1)=>{

                                    doc1.map((item)=>{
                                        miembros1.map((item1)=>{
                                            if(item._id==item1.Id){
                                                miembrosInfo.push(item);
                                            }
                                        })
                                        
                                    });
                                    
                                    resolveE("correcto");

                                });


                            });    
                            esperar.then(()=>{
                                console.log(miembrosInfo);
                                resolveG(miembrosInfo);
                            })  ;                    
                            
                            
                            
                           


                        });
                        break;
                    }
                    case '3':{

                        console.log("-*-*-*-*-* Guardado de Proyecto -*-*-*-*-");
                        var proyecto=new Proyecto({
                            nombre:datos.nombre[0],
                            lider:datos.liderP[0],
                            fecha:datos.fecha[0],
                            descripcion:datos.descripcion[0],
                            equipo:datos.equipoP[0],
                            color:datos.color[0]
                        });
                        proyecto.save().then(()=>{
                            console.log(" -*-*-*-*-* Proyecto Guardado -*-*-*-* ");
                            resolveG("Correcto");
                        }).catch((error)=>{
                            console.log(error);
                            rejectG("Error Guardando");
                        })






                        break;
                    }
                }
            });
        });
    }
}