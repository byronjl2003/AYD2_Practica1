
var hostApi = process.env.HOST_API;
var portApi = process.env.PORT_API;
const express = require('express');
const router = express.Router();
const http = require('http');
const { parse } = require('querystring');
var Request = require("request");
var jsonParsed;
const host = process.env.HOST;
//const hostp = process.env.PRUEBA;



router.get('/', (req, res) => {
    res.send(host);
});


//obtener tweets por username
router.post('/getweet', (req, res) => {

    var obtener_user = req.body.obtener_usuario;
    var datos = [];


    if (req.method === 'POST') {
        Request.get(`http://${hostApi}:${portApi}/api/${obtener_user}`, (error, response, body) => {
            if (error) {
                res.send('NO EXISTE INFORMACION PARA MOSTRAR');
                return console.dir(error);
            } else {
                tweets = JSON.parse(body);
                datos.push(tweets)
                datos.push(`${hostApi}:${portApi}`);
                res.render('usertw.html', { tweets: datos[0], hostport: datos[1] });

            }
        })
    }

});

//Escribir un tweet por usuario
router.post('/write', (req, res) => {
    let user = req.body.username;
    let content = req.body.contenido;

    var options = {
        uri: `http://${hostApi}:${portApi}/api/insertar`,
        method: 'POST',
        json: {
            "username": user,
            "contenido": content
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
    let id_tweet_received = req.body.id_tweet;
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

router.post('/verificarlogin', (req, res) => {

    var password = req.body.password;
    var username = req.body.username;

    //si son iguales , continua el flujo y realiza una consulta a la api para ver si el usuario existe
    const optionsGetuser = {
        url: `http://${hostApi}:${portApi}/api`,
        method: 'GET'
    };


    Request.get(optionsGetuser, (error, response, body) => { //se consume la api usuarios
        if (error) {
            res.render('error-page.html', Alerta());
            return console.dir(error);
        } else {
            users = JSON.parse(body); //obtenemos los usuarios existentes y lo almacenamos en una variable con formato json
            var contenido = "";
            for (var i = 0; i <= users.length - 1; i++) {

                if (users[i].username == username) {
                    contenido = "si" //si encuentra el usuario se detiene el ciclo
                    break;
                } else {
                    contenido = "no"
                }

            }
            //si el usuario existe no dejar realizar el registro
            if (contenido == "si") {
                res.redirect('/principal')               

            } else {
                res.render('error-page.html', Alerta());

            }



        }



    })
});


router.get('/login', (req, res) => {
    res.render('login.html');
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
    var datos = [];

    if (req.method === 'GET') {
        Request.get(`http://${hostApi}:${portApi}/api/`, (error, response, body) => {
            if (error) {
                res.send('NO EXISTE INFORMACION PARA MOSTRAR');
                return console.dir(error);
            } else {
                tweets = JSON.parse(body);
                datos.push(tweets)
                datos.push('Hola');

                res.render('principal.html', { tweets: datos[0], hostport: `${hostApi}:${portApi}` });
            }
        })
    }
    else {


    }
});

function Alerta(title, message, enlace, button) {
    var error = {
        title: "Usuario inexistente",
        message: "No existe información para mostrar , porque el usuario ingresado no existe",
        enlace: "login",
        button: "Regresar"
    }
    return error;
}

module.exports = router;