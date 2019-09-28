const express = require('express');
const router = express.Router();

//const mysqlConnection=require('../conexion_db');

// GET all Employees
router.get('/', (req, res) => {
    res.send('BIENVENIDOS');
  });


// GET all Employees
router.get('/api/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
    mysqlConnection.end();
  });

  // Obtener un usuario por username
router.get('/api/:username', (req, res) => {
    
    module.exports = function(req, res, next) {
        
        req.getConnection(function(err, connection) {
          if (err) return next(err);
          
          connection.query('SELECT 1 AS RESULT', [], function(err, results) {
            if (err) return next(err);
            
            results[0].RESULT;
            // -> 1
            
            res.send(200);
          });
          
        });
        
    }
});


  // INSERT UN USUARIO
router.post('/api/insertar', (req, res) => {
    const {username, contenido} = req.body;
    console.log(username,contenido);
    const query = `
      SET @id =0;
      SET @username= ?;
      SET @contenido = ?;
      CALL ADD_OR_EDIT_USER(@id, @username, @contenido);
    `;
    mysqlConnection.query(query, [username,contenido], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Usuario Agregado'});
      } else {
        console.log(err);
      }
    });
  
  });

  //modificar usuario
  
  router.put('/api/:id', (req, res) => {
    const { id } = req.params;
    const {contenido} = req.body;    
    const query = `
      SET @id = ?;
      SET @contenido = ?;      
      CALL ADD_OR_EDIT_USER(@id, @username, @contenido);
    `;
    mysqlConnection.query(query, [id,contenido,'0'], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tweet Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // borrar un tweet por id 
  router.delete('/api/delete/:id', (req, res) => {
    const {id} = req.params; 
    mysqlConnection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json({status: 'Tweet ELIMINADO'});
      } else {
        res.json({status: 'Error al eliminar'});
      }
    });
  });


module.exports = router;