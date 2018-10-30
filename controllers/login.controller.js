const Usuario = require('../models/usuario.model');
var ConnectDB = require('../database/access.js').ConnectDB;

//busca el usuario especificado para login
exports.login = function(req, res){
    var tipo = "findOne";
    var query = {username: req.body.username, password: req.body.password};
    console.log(query);
    var modelo = Usuario
    var nodo = req.params.nodo
    ConnectDB(nodo, tipo, modelo, query, function(json){
        res.send(json)
    });

}