const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '18.222.145.38',
  port:3306,
  //socketPath:' /var/run/mysqld/mysqld.sock',
  //socketPath:'/var/run/mysqld/mysqlx.sock',
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