const mongoose= require('mongoose')
const { MONGO_URI } = require('../config/envs')

const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model('Character', require('./schemas/characterSchema'))
const Film = conn.model('Film', require('./schemas/filmSchema'))

Character.find()
    .populate('films', ['_id', 'title'])
    .then(res => console.log(res[0]))



// const conn = mongoose.createConnection(MONGO_URI)
// const Character = conn.model('Character', require('./schemas/characterSchema'))
// Character.find().then(res => console.log(res)).catch(err=> console.log(err.message))