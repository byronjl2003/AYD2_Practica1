'use strict';

const express = require('express');
var ip = require('ip');

// Constants
const PORT = 8080;
const HOST = ip.address();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(ip.address());