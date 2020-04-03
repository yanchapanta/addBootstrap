'use strict'
// Creation to return a json object.- we make a
// class object with json object
var fs = require("fs");
var Project = require('../models/project');
var path= require('path');// It allows us to download physical routes from our file system

var controller = {//Method logic
	home: function(req, res){
		return res.status(200).send({//reply status and send reply
			message:'Soy la home'
		});
	},
	test: function(req, res){//Method logic
		return res.status(200).send({
			message:'Soy el metoho o accion test del controlador project'
		});
	},
	//METHOD THAT WE WILL ALLOW TO SAVE IN THE DATABASE, but first we have to import the project model
	saveProject: function(req, res){
		var project = new Project();//we create a project object, to access the properties of my new object
		//that I am going to save in the database

		var params = req.body; //I collect the parameters of the projection post
		project.name = params.name;//to the name property we give another value that I will take by post
		project.description = params.description;//to the description property we give another value that I will have for post
		project.category = params.category;//to the category property we give another value that I will take it by post
		project.year = params.year;//to the year property we give another value that I will take by post
		project.langs = params.langs;//We give the langs property another value, which I will take per post
		project.image = null;//to the image property we give another value that I will take by post
		//once the database object is saved, the callback function will be executed
		project.save((err, projectStored)=>{
			if(err) return res.status(500).send({message: 'Error al guardar el documento'});//if there is an error we do a message return
			if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el documento'});//  in the event that projectStored is not saved or if that variable does not exist, if it gives me false; 404 Why it really won't exist
			return res.status(200).send({project: projectStored});// In the event that everything goes well and the previous conditions have been skipped, we can return a project property inside a projectStored property
			// if I just pass it projectStored it would create a project property for me, so it's better to leave project: projectStored
		});

		// return res.status(200).send({
		// 	project: project,//devuelve  the parameters of name and surname // act the body-parser
		// 	message: 'Metodo saveProject'
		// });
	},
	//remove a single project from the database
	//http://localhost:3005/api/project/5e626e1d48518915ac5209e2
	getProject: function(req, res){ 
		var projectId = req.params.id;
		if (projectId == null) return res.status(404).send({message:'el proyecto no existe'});

		Project.findById(projectId,(err, project)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los datos'});
			if(!project) return res.status(404).send({message:'el proyecto no existe'});
			return res.status(200).send({project});
			
		});
	},
	//LIST THE ELEMENTS OF THE DATABASE
	getProjects: function(req, res){
		//find.- get all the documents within an entity or within a data collection in this case of Project
		// sort('-year') ---> I order from highest to lowest other opocones sort('+year'), o sort()
		Project.find({}).sort('-year').exec((err, projects)=>{// en find({}) we don't pass any parameters, if we give a find ({year: 2020}) parameter, it will only show the one from 2020
			if (err) return res.status(500).send({message: 'Error al devolver los datos.'});
			if(!projects) return res.status(404).send({message: 'No hay proyectos que demostrar'});
			return res.status(200).send({projects});

		});
	},
	//http://localhost:3005/api/project/5e628c7b20513e1ac8ee2cf7
	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;
		console.log(projectId);
		//if (projectId == null) return res.status(404).send({message:'el proyecto no existe para actualizar'});
		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated)=>{//{new:true} ---> nos devuelve objetos actualizado
			if (err) return res.status(500).send({message: 'Error al actualizar'});
			if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});
			return res.status(200).send({
				project: projectUpdated
			});
		});
	}, 
	deleteProject: function(req, res){
		var projectId = req.params.id;
		//findById findIdAndDelete findOneAndDelete  findByIdAndRemove
		Project.findByIdAndRemove(projectId, (err, projectRemove)=>{
			if (err) return res.status(500).send({message: 'No se ha podido eliminar el proyecto'});
			if(!projectRemove) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});
			return res.status(200).send({
				project: projectRemove
			});
		}); 
	},
	uploadImage: function (req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';
		// collect file by req 
		// in case that element exists with all the properties that I upload
		if(req.files){
			//Image address:::: "path"> "uploads\\igsdfdsf454h54xx5.jpg"
			var filePath=req.files.image.path;//---> uploads
			var fileSplit=filePath.split('\\');//----> \\
			// --------> I collect the index one which is the file ----> igsdfdsf454h54xx5.jpg
			var fileName=fileSplit[1];
			
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];
			if(fileExt=='png'|| fileExt == 'jpg' || fileExt == 'gif' || fileExt == 'jpeg'){
				// {new: true} me returns the last object saved in the database
				Project.findByIdAndUpdate(projectId,{image:fileName},{new: true},(err, updateProject)=>{
					if(err) return res.status(500).send({message:'Erro la imagen no se ha subido'});
					if(!updateProject) return res.status(404).send({message:'El proyecto no existe y no se ha asignado la imagen'});
					return res.status(200).send({project: updateProject});

				});

			}else{
				fs.unlink(filePath, (err)=>{
					return res.status(500).send({message: 'La extencion no existe'});
				});
			}
			

			//return res.status(200).send({files: req.files});
		}else{
			return res.status(500).send({message: fileName});
		}
	},
	// Method to return image
	getImagenFile: function(req, res){
		var file=req.params.image;//file name
		var path_file='./uploads/'+file;//image path
		

		//In case the path fs exists
		fs.exists(path_file, (exists)=>{
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({message:'No existe la imagen....'});
			}
		});
	}

};

module.exports = controller;//It serves to return the method