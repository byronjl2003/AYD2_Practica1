const express=require('express');
const app=express();
const morgan=require('morgan');

//settings
app.set('port',8080);
app.set('json spaces',2);


//middlewares
app.use(morgan('dev'));  //se puede usar combined para obtener mas información de la petición
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes

app.use(require('./routes/routes'));




//inicio del servidor
app.listen(8080,()=>{
    console.log(`Server en el puerto ${app.get('port')}`);
});