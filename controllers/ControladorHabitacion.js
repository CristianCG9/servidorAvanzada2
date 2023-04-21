import {ServicioHabitaciones} from "../services/ServiciosHabitaciones.js"
export class ControladorHabitaciones{
    constructor(){}

    async registrarHabitaciones(peticion,respuesta){
        let datosHabitacion=peticion.body
        let servicioHabitaciones=new ServicioHabitaciones()
        try{
            await servicioHabitaciones.registrarHabitaciones(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":`Exito al agregar los datos`
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    async buscarHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar la habitacion ${idHabitacion}`,
                "habitacion":await servicioHabitacion.buscarHabitacion(idHabitacion)
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    async buscarHabitaciones(peticion,respuesta){
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar las habitaciones`,
                "mensaje":await servicioHabitacion.buscarHabitaciones()
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    async editarHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        let servicioHabitacion= new ServicioHabitaciones()
        try{
            await servicioHabitacion.editarHabitacion(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":`Exito al editar la habitacion`
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }
}