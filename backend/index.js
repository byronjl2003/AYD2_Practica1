const express=require('express');
const app=express();
const morgan=require('morgan');

//settings
app.set('port',80);
app.set('json spaces',2);


//middlewares
app.use(morgan('dev'));  //se puede usar combined para obtener mas información de la petición
app.use(express.urlencoded({extended:false}));
app.use(express.json());
var mysql = require('mysql'), // node-mysql module
    myConnection = require('express-myconnection'), // express-myconnection module
    dbOptions = {
      host: '18.222.145.38',
      user: 'root',
      password: 'secret',
      port: 3306,
      database: 'ayd2'
    };
app.use(myConnection(mysql, dbOptions, 'single'));

//routes

/*app.get('/', (req, res) => {
    res.send('BIENVENIDOS');
  });
*/

app.use(require('./routes/routes'));




//inicio del servidor
app.listen(app.get('port'),()=>{
    console.log(`Server en el puerto ${app.get('port')}`);
});