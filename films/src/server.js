const express = require('express')
const morgan = require('morgan')
const { response } = require('./utils')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use('/films', require('./routes'))

server.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

// Database error's message comes in err.response.data.message
// status code comes in err.response.status when error comes from DB
server.use((err, req, res, next) => {
    res.status(err.response?.status || err.statusCode || 500).send({
        error: true,
        message: err.response?.data?.message || err.message
    })
})

module.exports = server