const express = require('express')
const controller = require('../controllers/parse')
const upload = require('../middleware/upload')

const router = express.Router()

router.post('/parse', upload.any(), controller.create)

module.exports = router