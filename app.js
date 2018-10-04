const express = require('express')
const bodyParser = require('body-parser')
const log4js = require('log4js')
const parseRoute = require('./route/parse')
const logger = require('./logger/logger')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(log4js.connectLogger(logger, {level: 'auto'}))
app.use('/api/', parseRoute)
module.exports = app
