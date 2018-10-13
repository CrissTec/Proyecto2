const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let funcionarioSchema = new Schema({
    cedula: {type: String, required: true, unique: true, dropDups:true,  min: 9, max:9},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    fechaDeIngreso: {type: Date, required: true},
    tipo: {type: String, required: true}, //(Doctor(a), Enfermero(a), Secretario(a))
    area: {type: String, required: true}, //(Administrativa, Emergencias, Ginecología, Oncología, Dermatología, Ortopedia, etc.)
});

//Exporta el modelo
module.exports = mongoose.model('Funcionario', funcionarioSchema);