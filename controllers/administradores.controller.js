var ConnectDB = require('../database/access.js').ConnectDB;
const Funcionario = require('../models/funcionario.model');
const CentroDeAtencion = require('../models/centrodeatencion.model');
const DiagnosticoCatalogo = require('../models/diagnosticocatalogo.model');
const TratamientoCatalogo = require('../models/tratamientocatalogo.model');
const DiagnosticoCita = require('../models/diagnosticocita.model');
const TratamientoCita = require('../models/tratamientocita.model');
//**********************************************************CRUD Funcionario****************************************************//

//Inserta un funcionario nuevo
exports.createfuncionario = function (req, res) {
    let funcionario = new Funcionario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        fechaDeIngreso: req.body.fechaDeIngreso,
        tipo: req.body.tipo,
        area: req.body.area,
    });
    var tipo = "save"
    var query = {};
    var modelo = funcionario
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Obtiene la información de todos los funcionarios
exports.readfuncionario = function (req, res) {
    var tipo = "find";
    var query = {}
    var modelo = Funcionario
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
};

//Obtiene un funcionario por el id
exports.readfuncionarioById = function (req, res) {
    var tipo = "findById";
    var query = req.params.id;
    var modelo = Funcionario;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Obtiene un funcionario por la cedula
exports.readfuncionarioByCedula = function (req, res) {
    var tipo = "findOne";
    var query = { cedula: req.params.ced };
    var modelo = Funcionario;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Actualiza un funcionario
exports.updatefuncionario = function (req, res) {
    var tipo = "findOneAndUpdate";
    var query = { cedula: req.params.ced, set: { $set: req.body } };
    var modelo = Funcionario;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//Borra un funcionariocapacidad
exports.deletefuncionario = function (req, res) {
    var tipo = "findOneAndDelete";
    var query = { cedula: req.params.ced }
    var modelo = Funcionario;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//**************************************************CRUD Centro de atencion****************************************************//

//Inserta un centroDeAtencion nuevo
exports.createcentroDeAtencion = function (req, res) {
    let centroDeAtencion = new CentroDeAtencion({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        lugar: req.body.lugar,
        capacidad: req.body.capacidad
    });
    var tipo = "save"
    var query = {};
    var modelo = centroDeAtencion
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Obtiene la información de todos los centroDeAtencions
exports.readcentroDeAtencion = function (req, res) {
    var tipo = "find";
    var query = {}
    var modelo = CentroDeAtencion
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
};

//Obtiene un centroDeAtencion por el id
exports.readcentroDeAtencionByCodigo = function (req, res) {
    var tipo = "findOne";
    var query = { codigo: req.params.cod };
    var modelo = CentroDeAtencion;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//Actualiza un centroDeAtencion
exports.updatecentroDeAtencion = function (req, res) {
    var tipo = "findOneAndUpdate";
    var query = { codigo: req.params.cod, set: { $set: req.body } };
    var modelo = CentroDeAtencion;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//Borra un centroDeAtencion
exports.deletecentroDeAtencion = function (req, res) {
    var tipo = "findOneAndDelete";
    var query = { codigo: req.params.cod }
    var modelo = CentroDeAtencion;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//*********************************************************CRUD diagnosticoCatalogo***********************************************/

//Inserta un diagnosticoCatalogo nuevo
exports.creatediagnosticoCatalogo = function (req, res) {
    let diagnosticoCatalogo = new DiagnosticoCatalogo({
        id: req.body.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        sintomas: req.body.sintomas,
        tratamiento: req.body.tratamiento
    });
    var tipo = "save"
    var query = {};
    var modelo = diagnosticoCatalogo
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Obtiene la información de todos los diagnosticoCatalogos
exports.readdiagnosticoCatalogo = function (req, res) {
    var tipo = "find";
    var query = {}
    var modelo = DiagnosticoCatalogo
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
};

//Obtiene un diagnosticoCatalogo por el id
exports.readdiagnosticoCatalogoById = function (req, res) {
    var tipo = "findOne";
    var query = { id: req.params.id };
    var modelo = DiagnosticoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Actualiza un diagnosticoCatalogo
exports.updatediagnosticoCatalogo = function (req, res) {
    var tipo = "findOneAndUpdate";
    var query = { id: req.params.id, set: { $set: req.body } };
    var modelo = DiagnosticoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//Borra un diagnosticoCatalogo
exports.deletediagnosticoCatalogo = function (req, res) {
    var tipo = "findOneAndDelete";
    var query = { id: req.params.id }
    var modelo = DiagnosticoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//*********************************************************CRUD tratamientoCatalogo**************************************************** */

//Inserta un tratamientoCatalogo nuevo
exports.createtratamientoCatalogo = function (req, res) {
    let tratamientoCatalogo = new TratamientoCatalogo({
        id: req.body.id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        dosis: req.body.dosis,
        monto: req.body.monto
    });
    var tipo = "save"
    var query = {};
    var modelo = tratamientoCatalogo
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Obtiene la información de todos los tratamientoCatalogos
exports.readtratamientoCatalogo = function (req, res) {
    var tipo = "find";
    var query = {}
    var modelo = TratamientoCatalogo
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
};

//Obtiene un tratamientoCatalogo por el id
exports.readtratamientoCatalogoById = function (req, res) {
    var tipo = "findOne";
    var query = { id: req.params.id };
    var modelo = TratamientoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//Actualiza un tratamientoCatalogo
exports.updatetratamientoCatalogo = function (req, res) {
    var tipo = "findOneAndUpdate";
    var query = { id: req.params.id, set: { $set: req.body } };
    var modelo = TratamientoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}


//Borra un tratamientoCatalogo
exports.deletetratamientoCatalogo = function (req, res) {
    var tipo = "findOneAndDelete";
    var query = { id: req.params.id }
    var modelo = TratamientoCatalogo;
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    });
}

//reporte enfermedad mas diagnosticada
exports.reporteDiagnosticada = function (req, res) {
    var constraints = [
        { $group: { "_id": "$nombre", "count": { "$sum": 1 } } },
    ]
    var query = { id: constraints, tipo: "max", cantidad: 1 }
    var nodo = req.params.nodo;
    var tipo = "aggregate";
    var modelo = DiagnosticoCita;
    ConnectDB(nodo, tipo, modelo, query, function (json) {
        res.send(json)
    })
}

//reporte de tratamiento con monto promedio
exports.reporteTratamientos = function (req, res) {
    var constraints = [
        { $group: { "_id": "$tipo", "promedio": { "$avg": "$monto" }, "count": { "$sum": 1 } } },
    ]
    var query = { id: constraints, cantidad: 0 }
    var nodo = req.params.nodo;
    var tipo = "aggregate";
    var modelo = TratamientoCatalogo;
    ConnectDB(nodo, tipo, modelo, query, function (jsonPromedio) {
        if (jsonPromedio.status == true) {
            tipo = "find";
            query = {}
            ConnectDB(nodo, tipo, modelo, query, function (jsonCatalogo) {
                if (jsonCatalogo.status == true) {
                    constraints = [
                        { $group: { "_id": "$nombre", "count": { "$sum": 1 } } },
                    ]

                    query = { id: constraints, cantidad: 0 }
                    tipo = "aggregate";
                    modelo = TratamientoCita;
                    ConnectDB(nodo, tipo, modelo, query, function (jsonCita) {
                        res.send(jsonPromedio)
                    });
                }else{
                    res.send({jsonCatalogo});
                }

            });
        }else{
            res.send(jsonPromedio)
        }
    });
}

//rango diagnosticos por paciente
exports.rangoDiagnosticos = function(req, res){
    
}