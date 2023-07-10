const { catchedAsync } = require('../utils')

module.exports = {
    getAllCharacters: catchedAsync(require('./getAllCharacters')),
    getCharacterById: catchedAsync(require('./getCharacterById')),
    createCharacter: catchedAsync(require('./createCharacter'))
}