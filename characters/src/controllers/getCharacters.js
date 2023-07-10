// const Character = require('../data')
const { response } = require('../utils')
const axios = require('axios')

module.exports = async (req, res) => {
    const axiosResponse = await axios('http://database:8004/Character')
    const characters = axiosResponse.data
    response(res, 200, characters)
}