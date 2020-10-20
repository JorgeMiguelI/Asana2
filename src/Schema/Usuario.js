var mongoose,{Schema, model}=require('mongoose');

var UserSJSON={
    nombre:String,
    usuario:String,
    correo:String,
    contraseña:String,
    rol:String,
    estado:String,
    fecha_registro:Date,
    organizacion:Schema.Types.ObjectId,
    proyecto:[Schema.Types.ObjectId]
}

var userS=new Schema(UserSJSON);

var User=model("User",userS);

module.exports = User;