#!/usr/bin/env node

//ADRIAN VARGAS
//301173276
//ASSIGNMENT 1 & 2
//OCTOBER 2022

//ADDED DEPENDENCIES

var configDB = require('../config/db');
var app = require('../config/app');
var debug = require('debug')('assignment1:server');
var http = require('http');
var passportConfig = require('../config/passport') 

//STORE IN EXPRESS AND GET PORT//
var db = configDB();
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//CREATE SERVER AND LISTEN

var server = http.createServer(app);


let pasport = passportConfig();
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
  
    return val;
  }

  if (port >= 0) {

    return port;
  }

  return false;
}

//EVENT LISTENER

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;


  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}



function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind); 
  console.log(`Express app running on http://localhost:${port}`)
}
