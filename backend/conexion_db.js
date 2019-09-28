


var mysql = require('mysql'), // node-mysql module
    myConnection = require('express-myconnection'), // express-myconnection module
    dbOptions = {
      host: '18.222.145.38',
      user: 'root',
      password: 'secret',
      port: 3306,
      database: 'ayd2'
    };
/*const mysqlConnection = mysql.createConnection({
  host: '18.222.145.38',
  port:3306,
  //socketPath:' /var/run/mysqld/mysqld.sock',
  //socketPath:'/var/run/mysqld/mysqlx.sock',
  user: 'root',
  password: 'secret',
  database: 'ayd2',
  insecureAuth : true,
  multipleStatements: true
});*/

app.use(myConnection(mysql, dbOptions, 'single'));

module.exports = mysqlConnection;