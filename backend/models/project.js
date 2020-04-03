'use strict'
//MODELS OR ENTITIES THAT WILL HAVE OUR PROJECTS


//Load modules
var mongoose=require('mongoose');//Entity that works with models
var Schema=mongoose.Schema;//outline of a model

var ProjectSchema=Schema({//create schema object
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

//mongoose.model.- To take this scheme and use as a model
//Project.- The type of entity that will be saved in the database
//Project.- what mongoose does is to lower it and pluralize it

module.exports = mongoose.model('Project', ProjectSchema);
//projects --> save documents in the database collection