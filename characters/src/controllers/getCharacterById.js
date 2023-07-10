const { response } = require('../utils')
const axios = require('axios')

module.exports = async (req, res) => {
    const { id } = req.params
    const axiosResponse = await axios('http://localhost:8004/Character/' + id)
    const char = axiosResponse.data
    response(res, 200, char || 'Character does not exist in database')
}