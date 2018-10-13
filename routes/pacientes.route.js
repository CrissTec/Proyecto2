const express = require('express');
const router = express.Router();

const pacienteController = require('../controllers/paciente.controller');

//rutas para las transacciones

//CRUD de paciente
router.get('/:nodo/readpaciente',pacienteController.readPaciente);
router.get('/:nodo/:id/readpacienteById', pacienteController.readPacienteById);
router.get('/:nodo/:ced/readpacienteByCedula', pacienteController.readPacienteByCedula);
router.post('/:nodo/createpaciente', pacienteController.createPaciente);
router.put('/:nodo/:ced/updatepaciente', pacienteController.updatePaciente);
router.delete('/:nodo/:ced/deletepaciente', pacienteController.deletePaciente);

module.exports = router;