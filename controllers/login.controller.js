const Usuario = require('../models/usuario.model');
var ConnectDB = require('../database/access.js').ConnectDB;

//busca el usuario especificado para login
exports.login = function(req, res){
    var tipo = "findOne"
    var query = {username: req.body.usuario, password: req.body.password};
    var modelo = Usuario
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });

}