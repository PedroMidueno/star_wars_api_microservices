const { Router } = require('express')
const { validateModel } = require('../middlewares')
const { getAll, getById } = require('../controllers')

const router = Router()

router.get('/:model', validateModel, getAll)
router.get('/:model/:id', validateModel, getById)

module.exports = router