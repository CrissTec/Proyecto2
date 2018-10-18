const express = require('express');
const router = express.Router();

const citasController = require('../controllers/citas.controller');

//por paciente
router.post('/:nodo/:ced/sacarCita', citasController.sacarCita);
router.put('/:nodo/:id/cancelarCitaPaciente', citasController.cancelarCitaPaciente)

//por doctor
router.put('/:nodo/:id/atenderCita', citasController.atenderCita);
router.post('/:nodo/:id/agregarTratamientoCita', citasController.agregarTratamientoCita)
router.post('/:nodo/:id/agregarDiagnosticoCita', citasController.agregarDiagnosticoCita)
//por secretaria

router.put('/:nodo/:id/cancelarCitaFuncionario', citasController.cancelarCitaFuncionario)
router.get('/:nodo/:id/:fecha/reasignarCita', citasController.reasignarCita)

//reportes
router.get('/:nodo/reportCitaAdministrador', citasController.reportCitaAdministrador)
router.get('/:nodo/:ced/reportCitaPaciente', citasController.reportCitaPaciente)
router.get('/:nodo/reportCitaDoctor', citasController.reportCitaDoctor)
router.get('/:nodo/reportCitaSecretaria', citasController.reportCitaSecretaria)

module.exports = router;