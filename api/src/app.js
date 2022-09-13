const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passportSetup = require('passport');
const passport = require('passport'); 
require('../passport.js');//AQUI ESTABA EL ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const authRoute = require('./routes/auth');
const loginRoute = require('./routes/Login');
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
require('./db.js');
var fs = require('fs');
var https = require('https');
const server = express();
server.name = 'API';
const PUERTO = 3001;

https.createServer({
  cert: fs.readFileSync('./Certificate.crt'),
  key: fs.readFileSync('./Private.key')
},server).listen(PUERTO, function(){
	console.log('Servidor https correindo en el puerto 3001');
});

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000/auth/google'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'https://localhost:3000/auth/google/callback'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use(cors(
  {
    origin: 'https://localhost:3000',
    methods:'GET, POST, PUT, DELETE, OPTIONS',
    credentials: true,
  }
  ));
server.use(cookieSession(//se cambió de cookieSession a Session
  {
    name: 'session',
    keys: ['lama'],
    maxAge: 24 * 60 * 60 *10
  }
  ));
server.use(passport.initialize());
server.use(passport.session());
require('passport');
// Error catching endware.
  server.use("/auth", authRoute);
  server.use('/', routes);
  // server.use('/', authRoute)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});










module.exports = server;
