const oMensaje = {}

//LLenar lista con las lineas de la conversacion
oMensaje.listaMensajes = function (conversacion) {

    var oMensajes = []
    
    try {

        var lineas = conversacion.split('\n')
        lineas.forEach(linea => {
            if(linea != "" && linea != null && linea != undefined)
              oMensajes.push(linea)
        });
        return oMensajes

    } catch (error) {
        return []
    }
}

//Califica segun la puntuacion y los rangos
oMensaje.numEstrellas = function(puntuacion){

    let estrellas = 0

    if(puntuacion <= 0)
      estrellas = 0
    else if(puntuacion > 0 && puntuacion <= 25)
      estrellas = 1
    else if(puntuacion > 25 && puntuacion <= 50)
      estrellas = 2
    else if(puntuacion > 50 && puntuacion <= 75)
      estrellas = 3
    else if(puntuacion >= 75 && puntuacion <= 90)
      estrellas = 4
    else
      estrellas = 5

    return estrellas

}
