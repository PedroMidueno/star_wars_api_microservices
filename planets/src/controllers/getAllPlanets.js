const axios = require('axios')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const axiosResponse = await axios('http://localhost:8004/Planet')
    const planets = axiosResponse.data
    response(res, 200, planets)
}