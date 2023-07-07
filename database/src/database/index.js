const mongoose = require('mongoose')
const { MONGO_URI } = require('../config/envs')
const {
    characterSchema,
    filmSchema,
    planetSchema
} = require('./schemas')

const conn = mongoose.createConnection(MONGO_URI)

// const Character = conn.model('Character', characterSchema)
// const Film = conn.model('Film', filmSchema)
// const Planet = conn.model('Planet', planetSchema)


// Character.find()
//     .populate('films', ['id', 'title'])
//     .then(res => console.log(`->Character: ${res[0]}`))
//     .catch(err => console.log(err.message))

// Film.find()
//     .populate('planets', ['_id', 'name'])
//     .then(res => console.log(`->Film: ${res[0]}`))
//     .catch(err => console.log(err.message))

// Planet.find()
//     .populate('films', ['id', 'title'])
//     .then(res => console.log(`->Planet: ${res[0]}`))
//     .catch(err => console.log(err.message))

module.exports = {
    Character: conn.model('Character', characterSchema),
    Film: conn.model('Film', filmSchema),
    Planet: conn.model('Planet', planetSchema)
}






// const conn = mongoose.createConnection(MONGO_URI)
// const Character = conn.model('Character', require('./schemas/characterSchema'))
// Character.find().then(res => console.log(res)).catch(err=> console.log(err.message))