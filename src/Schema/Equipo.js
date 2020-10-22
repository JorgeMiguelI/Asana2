var mongoose,{Schema,model, SchemaType}=require('mongoose');

var EquipoSJSON={
    nombre:String,
    descripcion:String,
    miembros:Array,
    estado:String

}
var equipoS=new Schema(EquipoSJSON);

var Equipo=model("Equipo",equipoS);

module.exports=Equipo;