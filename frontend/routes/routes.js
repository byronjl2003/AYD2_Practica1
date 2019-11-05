
var hostApi = process.env.PORT_DB;
var portApi = process.env.HOST_DB;
const express = require('express');
const router = express.Router();
const http = require('http');
const { parse } = require('querystring');
var Request = require("request");
var jsonParsed;
const host = process.env.HOST;



router.get('/', (req, res) => {
    res.send(host);
});


//obtener tweets por username
router.post('/getweet', (req, res) => {
    
    var obtener_user=req.body.obtener_usuario;
    var datos=[];
    

    if (req.method === 'POST') {
        Request.get(`http://${hostApi}:${portApi}/api/${obtener_user}`, (error, response, body) => {
            if (error) {
                res.send('NO EXISTE INFORMACION PARA MOSTRAR');
                return console.dir(error);
            } else {
                tweets = JSON.parse(body);
                datos.push(tweets)
                datos.push(`${hostApi}:${portApi}`);
                    res.render('usertw.html', {tweets:datos[0],hostport:datos[1]});
                                
            }
        })
    }
    
});



//Escribir un tweet por usuario
router.post('/write', (req, res) => {
    let user=req.body.username;
    let content=req.body.contenido;

    var options = {
        uri: `http://${hostApi}:${portApi}/api/insertar`,
        method: 'POST',
        json: {
          "username": user,
          "contenido":content
        }
      };

    if (req.method === 'POST') {
        
        Request.post(options, (error, response, body) => {
            if (error) {
                res.send('<H1>NO EXISTE INFORMACION PARA MOSTRAR</H1>');
                return console.dir(error);
            } else {
                res.redirect(200, '/principal');
            }
        })
    }
    else {


    }
    
});


//eliminar un tweet por usuario
router.post('/delete', (req, res) => {
    let id_tweet_received=req.body.id_tweet;
    if (req.method === 'POST') {
        Request.post(`http://${hostApi}:${portApi}/api/delete/${id_tweet_received}`, (error, response, body) => {
            if (error) {
                res.send('<H1>NO EXISTE INFORMACION PARA MOSTRAR</H1>');
                return console.dir(error);
            } else {
                res.redirect(200, '/principal');
            }
        })
    }
    else {


    }

   
});

router.get('/login', (req, res) => {
    res.render('login.html'); //Node conoce la ruta de los archivos ejs que estan dentro de views
    //console.log(path.join(__dirname,'/views/principal.html')); muestra la ruta absoluta + la ruta del archivo a mostrar
    //res.sendFile(path.join(__dirname,'/views/principal.html')); muestra el archivo en dicha ruta
    //res.render('principal',{title:'Mensaje desde el servidor'});    
});


router.get('/prueba', (req, res) => {
    res.render('principal.html'); //Node conoce la ruta de los archivos ejs que estan dentro de views
    //console.log(path.join(__dirname,'/views/principal.html')); muestra la ruta absoluta + la ruta del archivo a mostrar
    //res.sendFile(path.join(__dirname,'/views/principal.html')); muestra el archivo en dicha ruta
    //res.render('principal',{title:'Mensaje desde el servidor'});    
});

//obtener todos los twetts
router.get('/principal', (req, res) => {
    //var host = req.app.get('hostApi');
    //var port = req.app.get('portApi');
    var datos=[];

    if (req.method === 'GET') {
        Request.get(`http://${hostApi}:${portApi}/api/`, (error, response, body) => {
            if (error) {
                res.send('NO EXISTE INFORMACION PARA MOSTRAR');
                return console.dir(error);
            } else {
                tweets = JSON.parse(body);
                datos.push(tweets)
                datos.push('Hola');
                
                res.render('principal.html', {tweets:datos[0],hostport:`${hostApi}:${portApi}`});
            }
        })
    }
    else {


    }
});


module.exports = router;