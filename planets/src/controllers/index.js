const { catchedAsync } = require('../utils')

module.exports = {
    getAllPlanets: catchedAsync(require('./getAllPlanets')),
    getPlanetById: catchedAsync(require('./getPlanetById')),
    // createPlanet: catchedAsync(require('./createPlanet'))
}