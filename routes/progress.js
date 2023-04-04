'use strict'

const express = require('express')
const router = express.Router()

const progressController = require('./../controllers/progress')

router.get('/', progressController.index)
router.get('/list', progressController.progressList)
router.get('/add', progressController.createProgressForm)
router.post('/add', progressController.postCreateProgress)
router.get('/edit/:id', progressController.updateProgressForm)
router.post('/edit/:id', progressController.putUpdateProgress)
router.get('/remove/:id', progressController.deleteProgressFrom)
router.post('/remove/:id', progressController.deleteProgress)

module.exports = router
