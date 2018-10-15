const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let tratamientoCitaSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required:true},
    nombre: {type: String, required: true},
    dosis: {type: Number, min: 0},
    dias: {type: Number, min: 1},
    efectosSecundarios: {type: String, max:500}
});


//Exporta el modelo
module.exports = mongoose.model('TratamientoCita', tratamientoCitaSchema);