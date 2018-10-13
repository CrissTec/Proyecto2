const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let citaSchema = new Schema({
    id: {type: String, required: true, unique: true, dropDups:true},
    especialidad: {type: String, required: true},
    fecha: {type: Date, required: true},
    hora: {type: String, required: true},
    estado: {type: String, required: true}, 
    observacion: {type: String, max:500}
});


//Exporta el modelo
module.exports = mongoose.model('Cita', citaSchema);