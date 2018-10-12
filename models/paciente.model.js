const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let pacienteSchema = new Schema({
    cedula: {type: String, required: true, unique: true, dropDups:true,  min: 9, max:9},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    fechaNacimiento: {type: Date, required: true},
    tipoDeSangre: {type: String, required: true},
    nacionalidad: {type: String, required: true},
    lugarDeResidencia: {type: String, required: true},
    telefono: {type: [String]}
});

//Exporta el modelo
module.exports = mongoose.model('Paciente', pacienteSchema);