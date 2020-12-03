//Arhcio donde estaran todas las apis para trabajar con los Colaboradores
const express= require('express');
const Router= express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')

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

//Api para mandar correos para que se unan a una empresa
Router.post('/SendMail', async(req, res)=>{
    const datos= req.body.data;
    const idEmpresa= datos.empresa;
    const ListaCorreos= datos.Correos;

    try{
        let empresa= await Empresa.findById(idEmpresa);
        //console.log(empresa);
        for(let correo of ListaCorreos){
            await SendCorreo(correo, empresa);
        }
        res.json({msg: "Ok"});

    }catch(e){
        console.log(e)
        res.json({msg: "error"})
    }
    
});

async function SendCorreo(correo, empresa){
    
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'teamazana2@gmail.com',
            pass: 'TeamAzana12345'
        }
    }));
    var mailOptions = {
        from: 'teamazana2@gmail.com',
        to: correo, //debe de ir el correo a quien se le enciara
        subject: "Se te ha pedido unirte a una Empresa",
        html: "<h1 style='color: red;'>Asana2</h1>" +
         "<p>" + "Saludos del equipo de Azana2, has sido invitado a formar parte de la empresa "+ "<b>"+ empresa.nombre +"</b> ."+
         "Registrate en nuestra plataforma e ingresa el siguiente codigo para que te unas a esta empresa." + "</p><br>"+
         "<h4><b>Codigo: "+ empresa._id +"</b> </h4>"
    };
    await transporter.sendMail(mailOptions)
    .then(data=>{
        console.log("Mensaje mandado a "+ correo);
    })
    .catch(e=>{
        console.log(e);
    })
}


module.exports=Router;