const server = require('./src/server')
const PORT = 8004

const { Character, Film, Planet } = require('./src/database')

// Character.list()
//     .then(res => console.log(res[0]))

// Character.get(1)
//     .then(res => console.log(res))

// Character.insert({
//     _id: '201',
//     name: 'Pedro',
//     birth_year: '1999', //Si yo paso un number en la base de datos se convierte en string porque asi se definio en el Schema
//     unCampoCualquiera: 'Hola' //Este campo no se crea porque no esta definido en el Schema
// }).then(res => console.log(res))

// Film.list()
//     .then(res => console.log(res[0]))




server.listen(PORT, () => {
    console.info("Microservice Database running");
})