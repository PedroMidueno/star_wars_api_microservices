const characters = require('./characters.json')

module.exports = {
    list: async () => characters,    
    create: async () => {
        throw new Error('Hubo un error en la BDD al crear el personaje')
    }
}