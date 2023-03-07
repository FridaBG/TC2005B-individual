const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const fuerzaRutas = require('./routes/fuerza.routes');
app.use('/fuerza', fuerzaRutas);


app.listen(4000);


