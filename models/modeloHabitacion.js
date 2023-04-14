import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Construimos el esquema, personalizando la información
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:[String],
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    },
    cantidadMaxPersona:{
        type:Number,
        required:true
    },
    id:{
        type:Number,
        require:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)