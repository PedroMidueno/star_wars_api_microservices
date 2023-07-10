const Film = require('../data')
const axios = require('axios')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const axiosResponse = await axios('http://localhost:8004/Film')
    const films = axiosResponse.data
    response(res, 200, films)
}