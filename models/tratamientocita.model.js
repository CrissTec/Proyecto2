const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let tratamientoCitaSchema = new Schema({
    nombre: {type: String, required: true},
    dosis: {type: Number, min: 0},
    dias: {type: Number, min: 1},
    idcita: {type: String, required: true},
    efectosSecundarios: {type: String, max:500}
});


//Exporta el modelo
module.exports = mongoose.model('TratamientoCita', tratamientoCitaSchema);