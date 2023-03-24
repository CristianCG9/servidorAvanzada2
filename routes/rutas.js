import express from "express"

//Para separar las rutas de la lógica de negocio
//Utilizaré un metodo especial de EXPRESS

export let rutas=express.Router()

rutas.post('/registrarhabitacion', function (req, res) {
    res.send('Estamos registrando la habitación')
})
  
rutas.get('/buscarhabitaciones', function (req, res) {
      res.send('Estamos buscando todas las habitaciones')
})
  
rutas.get('/buscarhabitacion', function (req, res) {
      res.send('Estamos buscando la habitación')
})
  
rutas.put('/actualizarhabitacion', function (req, res) {
      res.send('Estamos actualicacion la habitación')
})
  
rutas.post('/crearreserva', function (req, res) {
      res.send('Estamos creando la reservación')
})
  
rutas.get('/buscarreserva', function (req, res) {
      res.send('Estamos buscando la reserva')
})
  
rutas.get('/buscarreservas', function (req, res) {
      res.send('Estamos buscando las reservas')
})
  
rutas.put('/actualizarreserva', function (req, res) {
      res.send('Estamos actualizando la reserva')
})