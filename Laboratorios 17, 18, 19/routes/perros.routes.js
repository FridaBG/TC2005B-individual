const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const perrosController = require('../controllers/perros.controller');

router.get('/nuevo', hasCreate, perrosController.get_nuevo);

router.post('/nuevo', hasCreate, perrosController.post_nuevo);

router.get('/:id', perrosController.listar);

router.get('/', perrosController.listar);

module.exports = router;