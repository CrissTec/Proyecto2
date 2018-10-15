const express = require('express');
const router = express.Router();

const citasController = require('../controllers/citas.controller');

//por paciente
router.post('/:nodo/:ced/sacarCita', citasController.sacarCita);
router.put('/:nodo/:id/cancelarCitaPaciente', citasController.cancelarCitaPaciente)
router.get('/:nodo/:ced/reportCitaPaciente', citasController.reportCitaPaciente)

//por doctor
router.put('/:nodo/:id/atenderCita', citasController.atenderCita);
router.post('/:nodo/:id/agregarTratamientoCita', citasController.agregarTratamientoCita)
router.post('/:nodo/:id/agregarDiagnosticoCita', citasController.agregarDiagnosticoCita)

//por secretaria

router.put('/:nodo/:id/cancelarCitaFuncionario', citasController.cancelarCitaFuncionario)
router.get('/:nodo/reportCitaSecretaria', citasController.reportCitaSecretaria)
router.get('/:nodo/:id/:fecha/reasignarCita', citasController.reasignarCita)

module.exports = router;