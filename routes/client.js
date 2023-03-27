'use strict'

const express = require('express')
const router = express.Router()

const clientController = require('./../controllers/client')

router.get('/', clientController.index)
router.get('/list', clientController.clientList)
router.get('/add', clientController.createclientForm)
router.post('/add', clientController.postCreateclient)
router.get('/edit/:id', clientController.updateclientForm)
router.post('/edit/:id', clientController.putUpdateclient)
router.get('/remove/:id', clientController.deleteclientFrom)
router.post('/remove/:id', clientController.deleteclient)

module.exports = router
