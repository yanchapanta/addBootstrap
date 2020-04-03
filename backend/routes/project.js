'use strict'
//ROUTE CONFIGURATION FILE
var express = require('express');//With the express module I can create the routes
var ProjectController = require('../controllers/project');//we import our project

var router = express.Router();//route service that has a lot of methods

//we take the multipart because if it does not recognize us req.files in controllers
var multipart = require('connect-multiparty');
// I indicate where the files will be uploaded with the multipair
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/home', ProjectController.home);//'/home' create a route then access the ProjectController to the metoso .home
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);// I indicate that the object ---> ProjectController and the method ---> saveProject are loaded
router.get('/project/:id?', ProjectController.getProject);//is is an optional parameter --->? , but you have to check if that parameter is null ---> if (projectId == null)
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImagenFile);
module.exports = router;
  