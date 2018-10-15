var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors({credentials: true, origin: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({credentials:true, origin: true}))

var pacientes = require('./routes/pacientes.route');
var administradores = require('./routes/administradores.route');
var citas = require('./routes/citas.route');
var login = require('./routes/login.route');

app.use('/paciente', pacientes);
app.use('/administrador', administradores);
app.use('/cita', citas);
app.use('/login', login)

app.use(function(req, res){
  res.send({status:false ,error:'Invalid URL'});
});

//Utilizar la base de datos
var access = require('./database/access.js')
let db = access.db

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  


