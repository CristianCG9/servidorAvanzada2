import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Reserva=new Schema({
    nombreCliente:{
        type:String,
        require:true
    },
    apellidoCliente:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    fechaInicioReserva:{
        type:Date,
        require:true
    },
    fechaFinalReserva:{
        type:Date,
        require:true
    },
    numeroPersonas:{
        type:Number,
        require:true
    }
})

export const modeloReserva=mongoose.model('reserba',Reserva)