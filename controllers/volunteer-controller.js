var express = require('express');
var router = express.Router();
var project = require('../models/project.js');
var util = require('util');

// get route -> main.html
router.get('/', function(req,res) {
	// redirect to /helpr
	res.redirect('/helpr');
});

// get route, edited to match sequelize
router.get('/helpr', function(req,res) {
	// shows the main.html page, not sure how it connects though, this might be handlebars module?
	res.render('main.html');
});

router.put('/helpr/addproj', function(req, res) {
	project.addProj(req.body.project_name, req.body.project_date_time, req.body.project_location, req.body.project_description, req.body.project_duration, function(){
		res.redirect('/helpr');
	});
});

// show all projects when someone searches
router.get('/helpr/search', function (req, res) {
	project.showAllProj(function(data) {
		var allProjects = { project: data };
		console.log(allProjects);
		res.render('main.html', allProjects);
	});

// BURGER example
// router.get('/burgers', function (req, res) {
// 	burger.all(function (data) {
// 		var allBurgers = { burger: data };
// 		console.log(allBurgers);
// 		res.render('index', allBurgers);
// 	});
// });

	console.log("This is Projects!");
	//console.log(projects);
	console.log('this is req.query ' + util.inspect(req.query));
	// res.end(projects);
	res.json(projects);
	console.log("here is the projects: " + projects);
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
