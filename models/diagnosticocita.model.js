const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let diagnosticoCitaSchema = new Schema({
    nombre: {type: String, required: true},
    nivel: {type: String, required: true},
    idcita: {type: String, required: true},
    observaciones: {type: String, max:500}
});


//Exporta el modelo
module.exports = mongoose.model('DiagnosticoCita', diagnosticoCitaSchema);