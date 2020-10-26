const express = require('express');
var multipart = require('multiparty');
var User = require('../Schema/Usuario');
var Empresa = require('../Schema/Empresa');

const { response } = require('express');





module.exports = {



    ProcesarInicio: function (req) {
        console.log("-----------Inicio de registro----------------------------");

        return new Promise(function (resolveG, rejectG) {
            var res;
            var form = new multipart.Form();
            console.log("Form data: ");
            var promiseSave;
            var bandera; //true es empresa nueva, false es miembro
            var wait = true;

            form.parse(req, function (err, fields, files) {
                console.log(fields);
                var nombre = fields.nombre[0] + fields.apellidos[0];
                var empresaID;

                if (fields.organizacion[0] == '') {
                    bandera = true;

                    var empresa = new Empresa({
                        nombre: fields.empresa[0]
                    });


                    empresa.save(function () {
                        console.log("----Empresa Guardada----");

                        Empresa.findOne({ nombre: fields.empresa[0] }, (err, doc) => {
                            console.log(doc);
                            console.log("----Empresa encontrada----");
                            var user = new User({
                                nombre: nombre,
                                usuario: fields.usuario[0],
                                correo: fields.correo[0],
                                contraseña: fields.password[0],
                                rol: "D",
                                estado: "A",
                                fecha_registro: new Date(),
                                organizacion: doc._id,
                                proyctos: new Array()


                            });

                             user.save().then(()=>{
                                console.log("---- Usuario Guardado-----");
                                resolveG ("Usuario Guardado");
                             })
                            .catch((response)=>{
                                console.log("Error guardando Usuario");
                                rejectG="Error Guardando";
                            });
                          
                            
                            
                        });





                    });








                } else {
                    var user = new User({
                        nombre: nombre,
                        usuario: fields.usuario[0],
                        correo: fields.correo[0],
                        contraseña: fields.password[0],
                        rol: "C",
                        estado: "A",
                        fecha_registro: new Date(),
                        organizacion: fields.organizacion[0],
                        proyctos: new Array()


                    });

                    user.save(() => {
                        console.log("---- Usuario Guardado-----");
                        resolveG ("Registro Correcto");
                    });
                }














            });




        });

    }

}
