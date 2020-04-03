'use strict'
//USING EXPRESS

//Loading express module
var express = require('express');
//Access a folder
var bodyParser = require('body-parser');
//I run express
var app=express();

//LOAD ROUTE FILES
var project_routes = require('./routes/project');

//MIDDLEWARES.-It is a method that is executed before the action of a controller
//bodyParser.- convert to json // parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//Anything that gets it converts to json // parse application / json
app.use(bodyParser.json());



//CORS
// Configure headers and cors // this way we allow from one access to another, from one domain to another // in the * put the allowed domain when it has a domain
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});






//RUTAS

//si '/'  ---->http://localhost:3005/test
//si '/api' ---->http://localhost:3005/api/test and therefore this does not exist http: // localhost: 3005 / test so
//which we say we have overwritten the route
app.use('/api', project_routes);//means that we over write the routes
//-----------------BELONGING TO THE SECTION 63-----------
// app.get('/',(req,res)=>{
// 	res.status(300).send(
// 		"<h1>Pagina de inicio</h1>"
// 	);
// });

// app.post('/test/:id',(req,res)=>{
	
// 	console.log(req.body.nombre);
// 	console.log(req.query.web);
// 	console.log(req.params.id);

// 	res.status(300).send({
// 		mensaje:"Hola mundo desde mi API de NodeJS"
// 	});

// });
//http://localhost:3005/test/88?web=victorroblesweb.es
//------------------------------------------------------------------------

//EXPORTAR
module.exports= app;

// PersonModel.findOne({first_name:"Pedro"})
// .then ( data=>{
//   console.log(data.first_name + " " + data.last_name);
// })
// .catch ( err=>{
//   console.log(err.message);
// })
