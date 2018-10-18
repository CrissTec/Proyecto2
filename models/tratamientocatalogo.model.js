const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let tratamientoCatalogoSchema = new Schema({
    id: {type: String, required: true, unique: true, dropDups:true},
    nombre: {type: String, required: true, unique: true, dropDups:true},
    tipo: {type: String, required: true}, // Medicamento, Cirugía, Curación, Sutura, Radiografía, Ultrasonido, Otros)
    dosis: {type: Number, required: true, min: 0},
    monto: {type: Number, required: true, min:0} 
});


//Exporta el modelo
module.exports = mongoose.model('TratamientoCatalogo', tratamientoCatalogoSchema);