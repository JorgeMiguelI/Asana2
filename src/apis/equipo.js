
var multipart = require('multiparty');
var User = require('../Schema/Usuario');

const Equipo = require('../Schema/Equipo');


module.exports={
    ProcesarRequest:function(req){
        console.log("------Inicio de Equipos-------");

        return new Promise((resolveG,rejectG)=>{

            var form=new multipart.Form();

            form.parse(req,(err,fields,files)=>{
                console.log(fields);
                if(fields.Operation[0]==1){
                    console.log("-*-*-*-*-*-*  Busqueda de empresa -*-*-*-*-*");
                    User.find({organizacion:fields.idE[0]},(error,doc)=>{
                        console.log("---- Busqueda finalizada----");
                        //console.log(doc);
                        resolveG(doc);
                    });



                }else if(fields.Operation[0]==2){
                    console.log("-*-*-*-* Guardado de Equipo -*-*-*-*");
                    var equipo=new Equipo({
                        nombre:fields.nombre[0],
                        descipcion:fields.descripcion[0],
                        miembros:fields.miembros[0],
                        estado:"A",
                        organizacion:fields.organizacion[0]
                    });
                    equipo.save().then(()=>{
                        console.log("-*-*-*-*-* Equipo Guardado -*-*-*-");
                        resolveG("Correcto");
                    })
                    .catch((response)=>{
                        console.log("Error Guardando");
                        rejectG("Error Guardando");
                    });
                }
            })



        });




    }
}