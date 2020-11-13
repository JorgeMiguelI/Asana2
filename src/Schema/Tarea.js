var mongoose,{Schema, model}=require('mongoose');

var TareaE= new Schema({
    nombre: String,
    encargado:Schema.Types.ObjectId,
    fecha_entrega: String,
    fecha_publicacion: String,
    descripcion: {
        type:String,
        default:""
    },
    prioridad: {
        type: String,
        default: ""
    },
    proyecto:Schema.Types.ObjectId,
    estado: {
        type:String,
        default:""
    },
    subtareas: Array,
    creador: Schema.Types.ObjectId,
    observaciones: Array,
    EsTarea:Boolean
});

var Tarea=model("Tarea",TareaE);

module.exports=Tarea;