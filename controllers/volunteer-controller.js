var express = require('express');
var router = express.Router();
var project = require('../models/project.js');
var util = require('util');


// get route -> main.html
router.get('/', function(req, res) {
	// redirect to /helpr
	res.redirect('/helpr');
});

// get route, edited to match sequelize
router.get('/helpr', function(req, res) {
	// shows the main.html page, not sure how it connects though, this might be handlebars module?
	res.render('main.html');
});

router.post('/helpr/addproj', function(req, res) {
	console.log(req.query);
	project.addProj(['project_name, project_date_time, project_location, project_description, project_duration, project_img'], [req.query.project_name, req.query.project_date_time, req.query.project_location, req.query.project_description, req.query.project_duration, req.query.project_img], function () {
		res.json('/helpr');
	});
    console.log('posted');
});


// show all projects when someone searches
router.get('/helpr/search', function(req, res) {
	project.showAllProj(function(data) {
		var allProjects = { project: data };
		console.log(allProjects);
		res.json(allProjects);
	});
});

router.post('/helpr/help', function(req, res) {
	// run the project model through the joinProj ORM
	project.joinProj(function(){
		// what needs to happen here?
	});
	// run the volunteer model through the joinProj ORM
	volunteer.join(function(){
		// what needs to happen here?
	});
	res.redirect('/helpr');
});

module.exports = router;
