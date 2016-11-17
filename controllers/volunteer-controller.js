var express = require('express');
var router = express.Router();
var Project = require('../models/volunteer.js');
var orm = require('../config/orm.js');

// get route -> main.html
router.get('/', function(req,res) {
	// redirect to /helpr
	res.redirect('/helpr'); 
});

// get route, edited to match sequelize
router.get('/helpr', function(req,res) {
	// shows the main.html page, not sure how it connects though, this might be handlebars module?
	res.render('main');
});

router.put('/helpr/addproj', function(req, res) {
	project.addProj(req.body.project_name, req.body.project_date_time, req.body.project_location, req.body.project_description, req.body.project_duration, function(){
		res.redirect('/helpr');
	});
});

router.put('/helpr/search', function(req,res) {
	// show all projects when someone searches
	project.showAllProj();
	res.redirect('/helpr');
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
