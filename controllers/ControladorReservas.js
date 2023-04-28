import { ServicioReservas } from "../services/ServiciosReservas.js"
import { ServicioHabitaciones } from "../services/ServiciosHabitaciones.js"
export class ControladorReservas {
    constructor() { }

    async registrarReserva(peticion, respuesta) {
        let datosReserva = peticion.body
        let servicioReservas = new ServicioReservas()
        let servicioHabitaciones = new ServicioHabitaciones()
        console.log(datosReserva.idHabitacion)

        try {
            let habitacion = await servicioHabitaciones.buscarHabitacion(datosReserva.idHabitacion)
            console.log(habitacion)
            // await servicioReservas.registarReserva(datosReserva)
            respuesta.status(200).json({
                "mensaje": `Exito al crear la reserva`
            })
        } catch (errorPeticion) {
            respuesta.status(400).json({
                "mensaje": `Fallamos${errorPeticion}`
            })
        }
    }

    async buscarReserva(peticion, respuesta) {
        let idReserva = peticion.params.idreserva
        let servicioReserva = new ServicioReservas()
        try {
            respuesta.status(200).json({
                "mensaje": `Exito al buscar la reserva ${idReserva}`,
                "reserva": await servicioReserva.buscarReserva(idReserva)
            })
        } catch (errorPeticion) {
            respuesta.status(400).json({
                "mensaje": `Fallamos${errorPeticion}`
            })
        }
    }

    async buscarReservas(peticion, respuesta) {
        let servicioReserva = new ServicioReservas()
        try {
            respuesta.status(200).json({
                "mensaje": `Exito al buscar las reservas`,
                "datos": await servicioReserva.buscarReservas()
            })
        } catch (errorPeticion) {
            respuesta.status(400).json({
                "mensaje": `Fallamos${errorPeticion}`
            })
        }
    }

    async editarReserva(peticion, respuesta) {
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        let servicioReserva = new ServicioReservas()
        try {
            await servicioReserva.editarReserva(idReserva, datosReserva)
            respuesta.status(200).json({
                "mensaje": `Exito al editar la reserva`
            })
        } catch (errorPeticion) {
            respuesta.status(400).json({
                "mensaje": `Fallamos${errorPeticion}`
            })
        }
    }
    async eliminarReserva(peticion, respuesta) {
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        let servicioReserva = new ServicioReservas()
        try {
            await servicioReserva.eliminarReserva(idReserva, datosReserva)
            respuesta.status(200).json({
                "mensaje": `Exito al eliminar la reserva`
            })
        } catch (errorPeticion) {
            respuesta.status(400).json({
                "mensaje": `Fallamos${errorPeticion}`
            })
        }
    }
}