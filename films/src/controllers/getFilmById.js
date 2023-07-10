const { response } = require('../utils')
const axios = require('axios')
const { ClientError } = require('../utils/errors')

module.exports = async (req, res) => {
    const { id } = req.params
    const axiosResponse = await axios('http://localhost:8004/Film/' + id)
    const film = axiosResponse.data
    response(res, 200, film || 'Film does not extist in database')
}