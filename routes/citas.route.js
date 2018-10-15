const express = require('express');
const router = express.Router();

const citasController = require('../controllers/citas.controller');

//por paciente
router.post('/:nodo/:ced/sacarCita', citasController.sacarCita);
router.put('/:nodo/:ced/cancelarCitaPaciente', citasController.cancelarCitaPaciente)
router.get('/:nodo/:ced/reportCitaPaciente', citasController.reportCitaPaciente)

//por doctor
router.put('/:nodo/:id/atenderCita', citasController.atenderCita);
router.post('/:nodo/:id/agregarTratamientoCita', citasController.agregarTratamientoCita)
router.post('/:nodo/:id/agregarDiagnosticoCita', citasController.agregarDiagnosticoCita)

module.exports = router;