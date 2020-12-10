var chai = require ('chai')
var assert = chai.assert
var should = chai.should()
var expect = chai.expect
//var assert = require('assert');
var oPuntuacion = require('../models/puntos')

var mensajes = {
    "conversacion": "11:51:00 CLIENTE1: Hola\n11:51:05 ASESOR1: Hola CLIENTE1, bienvenido al centro de servicio.\n11:51:10 CLIENTE1: Buenas tardes, tengo un inconveniente URGENTE, URGENTE, muy URGENTE. \n11:51:15 ASESOR1: Con mucho gusto lo atenderemos.\n11:51:25 CLIENTE1: Gracias. EXCELENTE SERVICIO."
}

describe('testing assert funciones Puntuacion', function() {

  describe('chequear funciones', function() {

    it('criterioPositivo', function() {
       
        result =  (oPuntuacion.criterioPositivo(mensajes))
        assert.equal(result ,10);
      });

    // it('debe retornar -100 cuando mensajes.length es igual a 1', function() {
    //   assert.equal(mensajes.length, 1);
    // });

    // it('debe retornar la primera ocurrencia del valor especificado', function() {
    //   assert.equal(cantMinutos < 1,  50);
    // });

  });
});