'use strict'

const express = require('express')
const router = express.Router()

const project_doerController = require('./../controllers/project_doer')

router.get('/', project_doerController.index)
router.get('/list', project_doerController.project_doerList)
router.get('/add', project_doerController.createproject_doerForm)
router.post('/add', project_doerController.postCreateproject_doer)
router.get('/edit/:id', project_doerController.updateproject_doerForm)
router.post('/edit/:id', project_doerController.putUpdateproject_doer)
router.get('/remove/:id', project_doerController.deleteproject_doerFrom)
router.post('/remove/:id', project_doerController.deleteproject_doer)

module.exports = router
