const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let diagnosticoCitaSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required:true},
    nombre: {type: String, required: true},
    nivel: {type: String, required: true},
    observaciones: {type: String, max:500},
});


//Exporta el modelo
module.exports = mongoose.model('DiagnosticoCita', diagnosticoCitaSchema);