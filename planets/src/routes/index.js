const { Router } = require('express')
const controllers = require('../controllers')
const { planetValidation } = require('../middlewares')

const router = Router()

router.get('/', controllers.getPlanets)
router.post('/', planetValidation, controllers.createPlanet)

module.exports = router