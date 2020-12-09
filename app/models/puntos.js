var moment = require('moment');
const config = require('../../resources/config')

const oPuntuacion = {}

//Evalua la cantidad de lineas
oPuntuacion.criterioCantidad = function(mensajes) {

    let puntos = 0;
    
    try {

        if(mensajes.length <= 5 )
            puntos = 20
        else
            puntos = 10

        return puntos

    } catch (error) {
        return 0 
    }
}

//Evalua la cantidad de coincidencias negativas
oPuntuacion.criterioNegativo = function(mensajes) {

    let puntos = 0;
    let coincidencias = 0;

    try {

        mensajes.forEach(mensaje => {

            var palabras = mensaje.split(' ')

            palabras.forEach(palabra =>{
                if(palabra.includes(config.malServicio))
                    coincidencias++
            })
             
        })

        if(coincidencias <= 2 )
            puntos = -5
        else
            puntos = -10

        return puntos

    } catch (error) {
        return 0 
    }
}

//Evalua la cantidad de coincidencias positivas
oPuntuacion.criterioPositivo = function(mensajes) {

    let puntos = 0
    let coincidencias = 0
    let coincidenciasPalabras = 0

    try {
     
        mensajes.forEach(mensaje => {
            
            if(mensaje.includes(config.buenServicio))
                coincidencias++                

            config.palabaras.forEach(palabra => {
                if(mensaje.includes(palabra))
                    coincidenciasPalabras++ 
            })  
        })       

        if(coincidenciasPalabras > 0 )           
            puntos = 10        

        if(coincidencias > 0 )           
            puntos = 100           

        return puntos

    } catch (error) {

        return 0

    }
}

//Evalua la duracion de la conversacion
oPuntuacion.criterioTiempo = function(mensajes) {

    let puntos = 0;

    try {
        var cantMinutos = 0
        var horaInicial = moment(((mensajes[0].split(' '))[0]), 'HH:mm:ss')
        var horaFinal = moment(((mensajes[mensajes.length - 1].split(' '))[0]), 'HH:mm:ss')
        
        cantMinutos = horaFinal.diff(horaInicial, 'minute')

        if(cantMinutos < 1)
            puntos = 50
        else
            puntos = 25

        return puntos

    } catch (error) {
        return 0 
    }
}

//Evalua si la conversacion fue de una sola linea
oPuntuacion.criterioAbandono = function(mensajes) {

    let puntos = 0;
    
    try {

        if(mensajes.length == 1 )
            puntos = -100

        return puntos

    } catch (error) {
        return 0 
    }
}

module.exports = oPuntuacion;