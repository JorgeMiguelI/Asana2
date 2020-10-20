var mongoose,{Schema, model}=require('mongoose');

var EmpresaS=new Schema({
    nombre:String
});

var Empresa=model("Empresa",EmpresaS);

module.exports=Empresa;