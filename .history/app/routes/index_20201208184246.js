'use strict'

const express = require('express')
const calificacionCtrl = require('../controllers/acreditarChat')

const api = express.Router()


api.post('/calificacion/',  calificacionCtrl.calificarChat)

module.exports = api