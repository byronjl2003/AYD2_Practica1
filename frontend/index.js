'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));




// settings
app.engine('html', require('ejs').renderFile);//decimos que usaremos la sintaxis y extension html , pero con el motor de plantillas ejs incluido
app.set('view engine', 'ejs');  //decimos que usaremos el motor de plantillas ejs
app.set('port', 4000);
app.set('host', '18.222.145.38');


//app.set('host', '18.222.145.38');

//middleware



// routes
app.use(require('./routes/routes')); //llamo a mi archivo routes.js que contiene todas las rutas

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Running on http://${app.get('host')}:${app.get('port')}`);
});

