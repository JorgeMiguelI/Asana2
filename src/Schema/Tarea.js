var mongoose,{Schema, model}=require('mongoose');

var TareaE= new Schema({
    nombre: String,
    encargado:Schema.Types.ObjectId,
    fecha_entrega: String,
    descripcion: {
        type:String,
        default:""
    },
    prioridad: {
        type: String,
        default: ""
    },
    proyecto: Array,
    estado: {
        type:String,
        default:""
    },
    subtareas: Array,
    creador: Schema.Types.ObjectId,
    observaciones: Array
});

var Tarea=model("Tarea",TareaE);

module.exports=Tarea;