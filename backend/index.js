'use strict'
//import mongoose module
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;


//MongoClient.connect (url, {useNewUrlParser: true})
//Enter the collection to the database
mongoose.Promise = global.Promise;//This is a promise
//Connection to the database
mongoose.connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser: true, useUnifiedTopology: true })
		.then(()=>{
			
			console.log("Conexion a la base de datos establecida con satisfactoriamente...");
			//Server Creation
			app.listen(port,()=>{
				console.log("Servidor corriendo correctamente en la url: localhost:3700");
			});
		})
		.catch(err => console.log(err)); 
		
// option { useNewUrlParser: true } to MongoClient.connect.
// option { useUnifiedTopology: true } to the MongoClient constructor.



