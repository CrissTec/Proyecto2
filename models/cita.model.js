const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let citaSchema = new Schema({
    especialidad: {type: String, required: true},
    fecha: {type: Date, required: true},
    hora: {type: String, required: true},
    estado: {type: String, required: true}, 
    observacion: {type: String, max:500},
    cedPaciente: {type: String, required: true, min:9, max:9},
    tratamientos: [{
        type: Schema.Types.ObjectId,
        ref: "TratamientoCita"
    }],
    diagnosticos: [{
            type: Schema.Types.ObjectId,
            ref: "DiagnosticoCita"
        
    }]
});


//Exporta el modelo
module.exports = mongoose.model('Cita', citaSchema);