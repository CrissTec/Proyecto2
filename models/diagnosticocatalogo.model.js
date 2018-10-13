const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let diagnosticoCatalogoSchema = new Schema({
    id: {type: String, required: true, unique: true, dropDups:true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true, max: 500},
    sintomas: {type: [String], required: true},
    tratamiento: {type: [String], required: true} //id de los tratamientos
});


//Exporta el modelo
module.exports = mongoose.model('DiagnosticoCatalogo', diagnosticoCatalogoSchema);