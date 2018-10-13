const express = require('express');
const router = express.Router();

const administradorController = require('../controllers/administradores.controller');

//rutas de las transacciones

//CRUD de funcionario
router.get('/:nodo/readfuncionario',administradorController.readfuncionario);
router.get('/:nodo/:id/readfuncionarioById', administradorController.readfuncionarioById);
router.get('/:nodo/:ced/readfuncionarioByCedula', administradorController.readfuncionarioByCedula);
router.post('/:nodo/createfuncionario', administradorController.createfuncionario);
router.put('/:nodo/:ced/updatefuncionario', administradorController.updatefuncionario);
router.delete('/:nodo/:ced/deletefuncionario', administradorController.deletefuncionario);

//CRUD de diagnosticoCatalogo
router.get('/:nodo/readdiagnosticoCatalogo',administradorController.readdiagnosticoCatalogo);
router.get('/:nodo/:id/readdiagnosticoCatalogoById', administradorController.readdiagnosticoCatalogoById);
router.post('/:nodo/creatediagnosticoCatalogo', administradorController.creatediagnosticoCatalogo);
router.put('/:nodo/:id/updatediagnosticoCatalogo', administradorController.updatediagnosticoCatalogo);
router.delete('/:nodo/:id/deletediagnosticoCatalogo', administradorController.deletediagnosticoCatalogo);

//CRUD de transaccionCatalogo
router.get('/:nodo/readtransaccionCatalogo',administradorController.readtransaccionCatalogo);
router.get('/:nodo/:id/readtransaccionCatalogoById', administradorController.readtransaccionCatalogoById);
router.post('/:nodo/createtransaccionCatalogo', administradorController.createtransaccionCatalogo);
router.put('/:nodo/:id/updatetransaccionCatalogo', administradorController.updatetransaccionCatalogo);
router.delete('/:nodo/:id/deletetransaccionCatalogo', administradorController.deletetransaccionCatalogo);

//CRUD de centroDeAtencion
router.get('/:nodo/readcentroDeAtencion',administradorController.readcentroDeAtencion);
router.get('/:nodo/:cod/readcentroDeAtencionByCodigo', administradorController.readcentroDeAtencionByCedula);
router.post('/:nodo/createcentroDeAtencion', administradorController.createcentroDeAtencion);
router.put('/:nodo/:cod/updatecentroDeAtencion', administradorController.updatecentroDeAtencion);
router.delete('/:nodo/:cod/deletecentroDeAtencion', administradorController.deletecentroDeAtencion);
module.exports = router;