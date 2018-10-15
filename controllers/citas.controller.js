var ConnectDB = require('../database/access.js').ConnectDB;
var mongoose = require('mongoose');




const Cita = require('../models/cita.model');
const Diagnostico = require('../models/diagnosticocita.model');
const Tratamiento = require('../models/tratamientocita.model');

//paciente sacar cita
exports.sacarCita = function (req, res) {
    let cita = Cita({
        especialidad: req.body.especialidad,
        fecha: req.body.fecha,
        hora: req.body.hora,
        estado: "Registrada",
        observacion: req.body.observacion,
        cedPaciente: req.params.ced
    });
    var tipo = "save"
    var query = {};
    var modelo = cita
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Paciente cancela la cita
exports.cancelarCitaPaciente = function (req, res) {
    var tipo = "findOneAndUpdate";
    var fechaUmbral = Date.now - 1;
    var constraints = { _id: req.params.id, fecha: { $lte: fechaUmbral } };
    var query = { id: constraints, set: { estado: "Cancelada por persona" } };
    var modelo = Cita;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//reporte de citas paciente
exports.reportCitaPaciente = function (req, res) {
    var tipo = "populate";
    var ced = req.params.ced;
    var constraints = { cedPaciente: req.params.ced } //query 
    var query = {id: constraints, cantidad: 2, populate : {one: 'diagnosticos', two: 'tratamientos'}};
    var modelo = Cita;
    var nodo = req.params.nodo;
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
}

//atiende la cita
exports.atenderCita = function (req, res) {
    var tipo = "findOneAndUpdate";
    var constraints = { _id: req.params.id, estado: { $eq: "Registrada" } };
    var query = { id: constraints, set: { estado: "Realizada" } }
    var modelo = Cita
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//le asigna un diagnostico a la cita
exports.agregarDiagnosticoCita = function (req, res) {
    var tipo = "save";
    var query = {};
    let diagnostico = Diagnostico({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        nivel: req.body.nivel,
        observaciones: req.body.observaciones,
    })
    var modelo = diagnostico
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        if (json.status == true) {
            //agregar el diagnostico a la lista
            tipo = "findOne";
            query = { _id: req.params.id }
            modelo = Cita
            ConnectDB(nodo, tipo, modelo, query, function (json) {
                if (json.status == true) {               
                    json.resultado.diagnosticos.push(diagnostico)
                    //actualizar el registro de la Base
                    tipo = "save";
                    modelo = json.resultado;
                    query = {};
                    ConnectDB(nodo, tipo, modelo, query, function (json) {
                        res.send(json)
                    });
                }else {
                    res.send(json)
                }
            });
        } else {
            res.send(json);
        }
    });
}

//agrega los tratamientos a la cita 
exports.agregarTratamientoCita = function (req, res) {
    var tipo = "save";
    var query = {};
    let tratamiento = Tratamiento({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        dosis: req.body.dosis,
        dias: req.body.dias,
        efectosSecundarios: req.body.efectosSecundarios
    })
    var modelo = tratamiento
    var nodo = req.params.nodo;
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        if (json.status == true) {
            //agregar el tratamiento a la lista
            tipo = "findOne";
            query = { _id: req.params.id }
            modelo = Cita
            ConnectDB(nodo, tipo, modelo, query, function (json) {
                if (json.status == true) {               
                    json.resultado.tratamientos.push(tratamiento)
                    //actualizar el registro de la Base
                    tipo = "save";
                    modelo = json.resultado;
                    query = {};
                    ConnectDB(nodo, tipo, modelo, query, function (json) {
                        res.send(json)
                    });
                }else {
                    res.send(json)
                }
            });
        } else {
            res.send(json);
        }
    });

}