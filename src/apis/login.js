const express = require('express');
const mongo = require('mongoose');
const router = express.Router();
const path = require('path');
var multipart = require('multiparty');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

var User = require('../Schema/Usuario');
var mongoose = require('mongoose');


module.exports = {
    ProcesarInicio: function(req) {
        console.log("-----------Inicio de sesión----------------------------");

        return new Promise(function(resolve, reject) {
            var res;
            var form = new multipart.Form();
            console.log("Form data: ");
            form.parse(req, function(err, fields, files) {
                console.log(fields);

                if (fields.correo[0].indexOf("@") == -1) {

                    User.findOne({ usuario: fields.correo[0] }, (err, doc) => {
                        if (doc != null) {
                            console.log("------Usuario Encontrado------");
                            console.log(doc);
                            if (doc.contraseña == fields.contraseña[0]) {
                                resolve(JSON.stringify(doc));
                            } else {
                                reject("2");
                            }

                        } else {
                            console.log("-----Error buscando Usuario-----");

                            reject("1");
                        }
                    });




                } else {
                    console.log("correo");
                    User.findOne({ correo: fields.correo[0] }, (err, doc) => {

                        if (doc != null) {
                            console.log("------Correo Encontrado------");
                            console.log(doc);
                            if (doc.contraseña == fields.contraseña[0]) {
                                resolve(JSON.stringify(doc));
                            } else {
                                reject("2");
                            }

                        } else {
                            console.log("-----Error buscando Correo-----");
                            reject("1");
                        }
                    });

                }


            });




        });

    }

}