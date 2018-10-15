const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.post('/:nodo/login/',loginController.login);
module.exports = router