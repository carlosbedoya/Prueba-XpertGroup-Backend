'use strict'
const config = require('./resources/config')
const app = require('./app')

app.listen(config.port, () => {
    console.log(`API REST FUNCIONANDO http://localhost:${config.port}`)
})