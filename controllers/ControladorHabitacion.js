export class ControladorHabitaciones{
    constructor(){}

    registrarHabitacion(peticion,respuesta){
        let datosHabitacion=peticion.body
        console.log(datosHabitacion)
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al agregar los datos`
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    buscarHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar la habitacion ${idHabitacion}`
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    buscarHabitaciones(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar las habitaciones`
            })
        }catch(erroPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos ${erroPeticion}`
            })
        }
    }

    editarHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        try{
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