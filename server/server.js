const path = require('path')
const express = require('express')

const entries = require('./routes/entries')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/entries', entries)

module.exports = server
