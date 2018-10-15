const Paciente = require('../models/paciente.model');
const Usuario = require('../models/usuario.model');
var ConnectDB = require('../database/access.js').ConnectDB;

//****************************************************CRUD Paciente******************************************** */
//Inserta un paciente nuevo y lo registra en el sistema
exports.createPaciente = function(req, res){
    let paciente = new Paciente({
        nombre: req.body.nombre,
        apellido : req.body.apellido,
        cedula: req.body.cedula,
        fechaNacimiento: req.body.fechaNacimiento,
        tipoDeSangre: req.body.tipoDeSangre,
        nacionalidad: req.body.nacionalidad,
        lugarDeResidencia: req.body.lugarDeResidencia,
        telefono: req.body.telefono
    });

    let usuario = new Usuario({
        cedula: req.body.cedula,
        tipo: "Paciente",
        username: req.body.usuario,
        password: req.body.password
    })
    var tipo = "save"
    var query = {};
    var modelo = paciente
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        if (json.status == true){
            modelo = usuario;
            ConnectDB(nodo, tipo, modelo, query, function(json){
                res.send(json)
            })
        }
    });

}

//Obtiene la información de todos los pacientes
exports.readPaciente = function(req, res){
    var tipo = "find";
    var query = {}
    var modelo = Paciente
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
};

//Obtiene un paciente por el id
exports.readPacienteById = function(req, res){
    var tipo = "findById";
    var query = req.params.id;
    var modelo = Paciente;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
}

//Obtiene un paciente por la cedula
exports.readPacienteByCedula = function(req, res){
    var tipo = "findOne";
    var query = {cedula: req.params.cedula};
    var modelo = Paciente;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
}

//Actualiza un paciente
exports.updatePaciente = function(req, res){
    var tipo = "findOneAndUpdate";
    var query = {cedula: req.params.ced, set: {$set: req.body}};
    var modelo = Paciente;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
}


//Borra un paciente
exports.deletePaciente = function(req, res){
    var tipo = "findOneAndDelete";
    var query = {cedula: req.params.ced}
    var modelo = Paciente;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });
}
