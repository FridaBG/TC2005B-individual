const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //no preocuparse si es windos o es mac, path se encarga de detectar el sistema operativo y cosntruir la ruta desde ahí
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const hockeyRutas = require('./routes/hockey.routes'); //crear nueva ruta 

app.use('/hockey', hockeyRutas); //mencionarle que va a ser parte del módulo

app.listen(3000);
