const { response } = require('../utils')
const axios = require('axios')

module.exports = async (req, res) => {
    const { id } = req.params
    const axiosResponse = await axios('http://database:8004/Planet/' + id)
    const planet = axiosResponse.data
    response(res, 200, planet || 'Planet does not exist in database')
}