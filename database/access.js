//BASE DE DATOS CENTRALIZADA
var mongoose = require('mongoose');
var mongoDB = "mongodb://localhost:27017/TECSalud"; // cambiar por la direccion de la base hosteada
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = db; //EXPORTA LA BASE CENTRALZADA

//funciones para conectarse a la base
ConnectDB = function(nodo, tipo, modelo, query, callback){
    //console.log("Tipo: " + tipo +", query: " + query + ", modelo: " + modelo + ", nodo: " + nodo)
    
    //HACER LOGICA DE DISTRIBUCIÓN
    if (tipo == "find"){
        modelo.find(query, function(err, result){
            if (err){
                callback({status: false, error: 'Error en la lectura', err: -1})
            }else{
                callback(result)
            }
        })
    }

    if (tipo == "findById"){
        modelo.findById(query, function(err, result){
            if (err){
                callback({status: false, error: 'Error en la lectura', err: -1})
            }else{
                callback(result)
            }
        })
    }

    if (tipo == "save"){
        modelo.save(function(err){
            if (err){
                callback({status: false, error: 'Error en la escritura', err: -1})
            }else{
                callback({status: true, message: "Guardado correctamente", err: 0})
            }
        });
    }

    if (tipo == "findByIdAndUpdate"){
        modelo.findByIdAndUpdate(query.id, query.set, function(err, updated){
            if (err){
                callback({status: false, error: 'Error en la actualización', err: -1})
            }else{
                callback({status: true, message: "Actualizado correctamente", err: 0})
            }
        })
    }

    if (tipo == "findByIdAndDelete"){
        modelo.findByIdAndDelete(query, function(err, deleted){
            if (err){
                callback({status: false, error: 'Error en el borrado', err: -1})
            }else{
                callback({status: true, message: "Borrado correctamente", err: 0})
            }
        })
    }


}


module.exports.ConnectDB = ConnectDB
//AggregateDB = function(aggregate, model, callback){};