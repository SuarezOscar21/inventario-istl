const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


require('./conection-mongo/dbconection');
var routerActivo= require('./Routes/router_activo');
var routerUserLogin= require('./Routes/router_user_login');
var routerCarrer = require('./Routes/router_carrer');
var routerRol = require('./Routes/router_rol');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
  
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  
    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
  });  
  app.use(cors())
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));


//see petitions 

app.use(morgan('dev'));

//routes
app.use('/api', routerActivo);
app.use('/api', routerCarrer);
app.use('/api', routerUserLogin);
app.use('/api',routerRol);


//port
var port = process.env.PORT || 8090
app .listen(port, ()=> {
    console.log('iniciando',port)

})