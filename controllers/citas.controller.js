var ConnectDB = require('../database/access.js').ConnectDB;
var mongoose = require('mongoose');



const Paciente = require('../models/paciente.model')
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
    //fechas
    var hoy = new Date(Date.now())
    var ayer = new Date()
    ayer.setDate(hoy.getDate() - 1);
    ayer.setMonth(hoy.getMonth());
    ayer.setFullYear(hoy.getFullYear());
    ayer.setHours(hoy.getHours());
    var constraints = { _id: req.params.id, fecha: { $lte: ayer } };
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
    var query = { id: constraints, cantidad: 2, populate: { one: 'diagnosticos', two: 'tratamientos' } };
    var modelo = Cita;
    var nodo = req.params.nodo;
    ConnectDB(nodo, tipo, modelo, query, function (json) {
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
                } else {
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
                } else {
                    res.send(json)
                }
            });
        } else {
            res.send(json);
        }
    });
}

//cancela una cita como funcionario
exports.cancelarCitaFuncionario = function (req, res) {
    var tipo = "findOneAndUpdate";
    //fechas
    var hoy = new Date(Date.now())
    var ayer = new Date()
    ayer.setDate(hoy.getDate() - 1);
    ayer.setMonth(hoy.getMonth());
    ayer.setFullYear(hoy.getFullYear());
    ayer.setHours(hoy.getHours());

    var constraints = { _id: req.params.id, fecha: { $lte: ayer } };
    var query = { id: constraints, set: { estado: "Cancelada por funcionario" } };
    var modelo = Cita;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//report de citas secretaria
exports.reportCitaSecretaria = function (req, res) {
    var tipo = "find";
    var query = { estado: "Registrada" };
    var modelo = Cita;
    var nodo = req.params.nodo;
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//asignar citas cancelada por un funcionario
exports.reasignarCita = function (req, res) {
    var tipo = "findOneAndUpdate";
    var query = { id: req.params.id, set: { fecha: req.params.fecha } };
    var modelo = Cita;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });

}

//report de citas secretaria
exports.reportCitaDoctor = function (req, res) {
    var tipo = "populate";
    var constraints = {} 
    var query = { id: constraints, cantidad: 2, populate: { one: 'diagnosticos', two: 'tratamientos' } };
    var modelo = Cita;
    var nodo = req.params.nodo;
    ConnectDB(nodo, tipo, modelo, query, function (jsonCitas) {
        var total = jsonCitas.resultado.length;
        var count = 0;
        resultado = [];
        tipo = "findOne";
        modelo = Paciente;
        if (jsonCitas.status == true) {
            jsonCitas.resultado.forEach(cita => {
                query = { cedula: cita.cedPaciente };
                ConnectDB(nodo, tipo, modelo, query, function (jsonPaciente) {
                    count++;
                    if (jsonPaciente.status == true) {
                        resultado.push({ cita: cita, paciente: jsonPaciente })
                    } else {
                        res.send(jsonPaciente);
                    }
                    if (count == total) {
                        res.send({ status: true, resultado: resultado });
                    }
                })
            });
        }else{
            res.send(jsonCitas);
        }

    });
}

//reporte de citas administrador
exports.reportCitaAdministrador = function(req, res){
    var tipo = "aggregate";
    var nodo = req.params.nodo;
    var modelo = Cita;
    Cita.count({},function(err, c){
        console.log("cantidad de citas: " + c)
    })
    var constraints = [
        { $group: { "_id": "$cedPaciente", "count": { "$sum": 1 } } },
    ]
    var query = {id: constraints, cantidad : 3, tipo: "max"};
    ConnectDB(nodo, tipo, modelo, query, function (jsonPacientes){
        if (jsonPacientes.status == true){
            tipo = "count";
            query = {};
            ConnectDB(nodo, tipo, modelo, query, function(jsonCount){
                if (jsonCount.status == true){
                    var result = {cantidad: jsonCount.resultado, pacientes: jsonPacientes.resultado}
                    var json = {status : true, err: 0, resultado: result};
                    res.send(json)
                }else{
                    res.send(jsonCount);
                }
            })
        }else{
            res.send(jsonPacientes)
        }
    });
}

