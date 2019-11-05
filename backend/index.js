require('dotenv').config()
const express=require('express');
const app=express();
const morgan=require('morgan');
const port = process.env.PORT;
const host = process.env.HOST;

//settings
app.set('port',port);
app.set('json spaces',2);


//middlewares
app.use(morgan('dev'));  //se puede usar combined para obtener mas información de la petición
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/routes'));

//inicio del servidor
app.listen(app.get('port'),()=>{
    console.log(`Server en el puerto ${app.get('port')}`);
});