export class ControladorReservas{
    constructor(){}

    registrarReserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al crear la reserva`
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos${erroPeticion}`
            })
        }
    }
    buscarReserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar la reserva`
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos${erroPeticion}`
            })
        }
    }
    buscarReservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al buscar las reservas`
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos${erroPeticion}`
            })
        }
    }
    editarReserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al editar la reserva`
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos${erroPeticion}`
            })
        }
    }
    eliminarReserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":`Exito al eliminar la reserva`
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":`Fallamos${erroPeticion}`
            })
        }
    }
}