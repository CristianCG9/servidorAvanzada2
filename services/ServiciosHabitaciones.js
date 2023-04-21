import { modeloHabitacion } from "../models/modeloHabitacion.js";

export class ServicioHabitaciones{
    constructor(){}
    async registrarHabitaciones(datosHabitacion){
        let habitacionNueva=new modeloHabitacion(datosHabitacion)
        return await habitacionNueva.save()
    }
    async buscarHabitaciones(){
        let habitacionesConsultadas=await modeloHabitacion.find()
        return habitacionesConsultadas
    }
    async buscarHabitacion(idHabitacion){
        let habitacionConsultada=await modeloHabitacion.findById(idHabitacion)
        return habitacionConsultada
    }
    async editarHabitacion(idHabtiacion,datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(idHabtiacion,datosHabitacion)
    }
}