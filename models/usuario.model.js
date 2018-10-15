const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let usuarioSchema = new Schema({
    cedula: {type: String, required: true, unique: true,  min: 9, max:9},
    tipo: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

//Exporta el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);