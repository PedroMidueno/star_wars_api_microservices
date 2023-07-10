const { response } = require('../utils')
const axios = require('axios')

module.exports = async (req, res) => {
    const { id } = req.params
    const axiosResponse = await axios('http://database:8004/Film/' + id)
    const film = axiosResponse.data
    response(res, 200, film || 'Film does not exist in database')
}