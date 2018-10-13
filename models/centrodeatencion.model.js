const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let centroDeAtencionSchema = new Schema({
    codigo: {type: String, required: true, unique: true, dropDups:true},
    nombre: {type: String, required: true},
    tipo: {type: String, required: true}, //hospital, clinica, ebais
    lugar: {type: String, required: true},
    capacidad: {type: Number, required: true}
});

//Exporta el modelo
module.exports = mongoose.model('CentroDeAtencion', centroDeAtencionSchema);