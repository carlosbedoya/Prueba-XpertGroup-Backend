'use strict'

const oPuntuacion = require('../models/puntos')
const oMensaje = require('../models/text')

function calificarChat (req, res) {
  
  let puntuacion = 0
  let estrellas = 0

  try {

    var conversacion = req.body.conversacion
    
    //LLenar lista con cada una de las lineas de la conversacion
    let mensajes =  oMensaje.listaMensajes(conversacion);

    if(mensajes.length == 0) 
        return res.status(404).send({ code : 404 , mensaje : "Mensaje No valido" } )
        
    let calificacionPositiva = (oPuntuacion.criterioPositivo(mensajes))

    if(calificacionPositiva == 100) 
        return res.status(200).send({ calificacion :{ message: mensajes, puntos : calificacionPositiva, estrellas : 5}} )
    
    //Suma todas las puntuaciones teniendo en cuenta los criterios
    puntuacion = calificacionPositiva + 
                 oPuntuacion.criterioCantidad(mensajes) + 
                 oPuntuacion.criterioNegativo(mensajes) +               
                 oPuntuacion.criterioTiempo(mensajes) +
                 oPuntuacion.criterioAbandono(mensajes);

    //Asigna el numero de estrellas segun su puntuacion
    estrellas = oMensaje.numEstrellas(puntuacion)
    
    return res.status(200).send({calificacion :{ message: mensajes, puntos : puntuacion, estrellas : estrellas}})

  } catch (error) {

     return res.status(500).send({ error : { code : 500 , mensaje : error.message } }) 

  }
  
}

module.exports = {  
    calificarChat
}