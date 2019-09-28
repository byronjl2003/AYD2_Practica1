const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '18.222.145.38',
  port:'33060',
  user: 'root',
  password: 'secret',
  database: 'ayd2',
  insecureAuth : true,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    console.trace('fatal error: ' + err.message);
    return;
  } else {
    console.log('Base de datos conectada');
  }
});

module.exports = mysqlConnection;