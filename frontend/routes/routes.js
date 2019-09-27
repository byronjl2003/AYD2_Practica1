const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello world\n');
});

router.get('/principal', (req, res) => {
    res.render('principal.html'); //Node conoce la ruta de los archivos ejs que estan dentro de views
    //console.log(path.join(__dirname,'/views/principal.html')); muestra la ruta absoluta + la ruta del archivo a mostrar
    //res.sendFile(path.join(__dirname,'/views/principal.html')); muestra el archivo en dicha ruta
    //res.render('principal',{title:'Mensaje desde el servidor'});    
});


module.exports = router;