var mongoose,{Schema,model, SchemaType}=require('mongoose');

var ProyectoSJSON={
    nombre:String,
    lider:Schema.Types.ObjectId,
    fechaEntrega:Date,
    descripcion:String,
    equipo:Schema.Types.ObjectId,
    color:String
}

var proyectoS=new Schema(ProyectoSJSON);

var Proyecto=model("Proyecto",proyectoS);

module.exports=Proyecto;