'use strict'

const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ origin: 'http://localhost:4200' }))

const api = require('./app/routes')
app.use('/api', api)

module.exports = app