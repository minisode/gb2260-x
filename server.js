const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const { routes } = require('.')
const server = express()

server.use(morgan('dev'))
server.use(helmet())
server.use(routes())

module.exports = server
