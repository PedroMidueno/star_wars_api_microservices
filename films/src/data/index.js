const films = require ('./films.json')

module.exports = {
    list: async () => films,
    create: async () =>{
        throw new Error('Hubo un error en la BDD al crear la película')
    }
}