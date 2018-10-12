const express = require('express');
const router = express.Router();

const pacienteController = require('../controllers/paciente.controller');

//rutas para las transacciones
router.get('/:nodo/readPaciente',pacienteController.readPaciente);
router.get('/:nodo/:id/readPacienteById', pacienteController.readPacienteById);
router.post('/:nodo/createPaciente', pacienteController.createPaciente);
router.put('/:nodo/:id/updatePaciente', pacienteController.updatePaciente);
router.delete('/:nodo/:id/deletePaciente', pacienteController.deletePaciente);

module.exports = router;