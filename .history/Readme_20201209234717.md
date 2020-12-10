# leame

Sistema de  calificacion de atencion para clientes para el area del servicio  al cliente, solucion desarrollada con un Frontend (Web-SPA) y un Backend definido.

  - Backend API REST logica de conteo y calificacion 
  - Frontend en angular para interfase de la vista del chat
  - arquitectura MVC

# API rest Node js

  - clase puntos para calificacion de palabras
  - clase text para manejo de mensajes escritos en el chat , evaliucion de cantidad de estrellas segun criterios.
  - 
tambien:
  - API_URL = 'http://localhost:3007/api/calificar'
  - ### Ejemplo de jon para consumir API

{
    "conversacion": "11:51:00 CLIENTE1: Hola\n11:51:05 ASESOR1: Hola CLIENTE1, bienvenido al centro de servicio.\n11:51:10 CLIENTE1: Buenas tardes, tengo un inconveniente URGENTE, URGENTE, muy URGENTE. \n11:51:15 ASESOR1: Con mucho gusto lo atenderemos.\n11:51:25 CLIENTE1: Gracias. EXCELENTE SERVICIO."
}
  
### Versionamiento en controlador de versiones

se manejo en dos proyectos independientes el primero el frontend en node.js y el segundo el backend en angular version 11

| Plugin | README |
| ------ | ------ |
| Backend | https://github.com/carlosbedoya/Prueba-XpertGroup-Backend |
| Frontend | https://github.com/carlosbedoya/Prueba_XpertGroup_Frontend |


# ENUNCIADO DEL EJERCICIO
CallCenter reconocido en el mercado requiere calificar el servicio que la empresa brinda a sus clientes

por medio del historial de las conversaciones.
Adjunto se encuentra un archivo con el formato propuesto.
Lista de palabras: Gracias, Buena Atención, Muchas Gracias
Reglas de negocio:

* El puntaje aplicará si hay coincidencia en los criterios aplicados a continuación:
* Obtener el número de mensajes enviados en la conversación, se identifican por un salto de
línea [enter], los puntos se redistribuyen de la siguiente manera:
* Si es menor o igual a 5 (20 puntos).
* Si es mayor que 5 (10 puntos).
* Número de coincidencias de la palabra URGENTE por registro:
* Si es menor o igual que 2 (- 5puntos).
* Si es mayor que 2 (-10 puntos).
* Lista de palabras que exclaman el buen servicio en la conversación:
* Si coincide la palabra EXCELENTE SERVICIO (100 puntos) y no continúa con la
calificación del servicio.
* Si existe alguna coincidencia en la lista de palabras (10 puntos).
* Cuánto tiempo duró la conversación expresada en minutos y segundos:
* Si es menor de 1 minuto (50 puntos).
* Si es mayor o igual a 1 minuto (25 puntos).
* Se categoriza una conversación como abandonada cuando sólo tiene 1 línea de conversación.

debido a que el asesor nunca dio respuesta alguna (-100 puntos).
* Calificación del servicio expresada en 5 estrellas, el puntaje es el siguiente:
* < 0 puntos (sin estrellas)
* < 25 puntos (1 estrella: *)
* 25 > 50 puntos (2 estrellas: **)
* 50 > 75 puntos (3 estrellas: ***)
* 75 > 90 puntos (4 estrellas: ****)
* > 90 puntos (5 estrellas: *****)

### archivo de configuracion

archivo de recursos de configuracion exterma para parametrizacion de palabras clave y puertos de ejecucion del sistema..


```sh
var config = {
    port: process.env.PORT || 3007,
    palabras : ['Gracias','Buena Atención','Muchas Gracias'],
    malServicio : 'URGENTE',
    buenServicio : 'EXCELENTE SERVICIO'
};

module.exports = config;
```





