const planets = require('./planets.json')

module.exports = {
    list: async () => planets,
    create: async () => {
        throw new Error('Hubo un error en la BDD al creaar el planeta')
    }
}