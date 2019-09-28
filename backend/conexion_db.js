const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '18.222.145.38',
  user: 'root',
  password: 'secret',
  database: 'ayd2',
  insecureAuth : true,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;