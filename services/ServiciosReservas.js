import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReservas{
    constructor(){}
    async registarReserva(datosReserva){
        let reservaNueva=new modeloReserva(datosReserva)
        return await reservaNueva.save()
    }
    async buscarReservas(){
        let reservasConsultadas=await modeloReserva.find()
        return reservasConsultadas
    }
    async buscarReserva(idReserva){
        let reservasConsultada=await modeloReserva.findById(idReserva)
        return reservasConsultada
    }
    async editarReserva(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }
}