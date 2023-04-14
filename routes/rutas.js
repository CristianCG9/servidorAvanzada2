import express from "express"
import {ControladorHabitaciones} from "../controllers/ControladorHabitacion.js"
import {ControladorReservas} from "../controllers/ControladorReservas.js"

let controladorHabitacion= new ControladorHabitaciones()
let controladorReservas= new ControladorReservas()

//Para separar las rutas de la lógica de negocio
//Utilizaré un metodo especial de EXPRESS

export let rutas=express.Router()

rutas.post('/registrarhabitacion',controladorHabitacion.registrarHabitacion)
rutas.get('/buscarhabitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscarHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion',controladorHabitacion.editarHabitacion)
rutas.post('/crearreserva',controladorReservas.registrarReserva)
rutas.get('/buscarreserva',controladorReservas.buscarReserva)
rutas.get('/buscarreservas',controladorReservas.buscarReservas)
rutas.put('/actualizarreserva',controladorReservas.editarReserva)
rutas.delete('/eliminarreserva',controladorReservas.eliminarReserva)