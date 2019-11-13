'use strict';

const express = require('express');
require('dotenv').config() //variables de entorno
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT;
//const host = process.env.HOST;


app.use(bodyParser.urlencoded({ extended: true }));





// settings
app.engine('html', require('ejs').renderFile);//decimos que usaremos la sintaxis y extension html , pero con el motor de plantillas ejs incluido
app.set('view engine', 'ejs');  //decimos que usaremos el motor de plantillas ejs
app.set('port', port);
//app.set('host',host);


//app.set('host', '18.222.145.38');

//middleware



// routes
app.use(require('./routes/routes')); //llamo a mi archivo routes.js que contiene todas las rutas

//static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'),()=>{
    console.log(`Server frontend en el puerto ${app.get('port')}`);
});
