var express = require('express');
var router = express.Router();
var Project = require('../models/volunteer.js';

//get route -> index
router.get('/', function(req,res) {
	res.redirect('/helpr')
});

// get route, edited to match sequelize
router.get('/helpr', function(req,res) {
	// replace old function with sequelize function
	Volunteer.findAll()
	// use promise method to pass the burgers...
	.then(function(volunteer_data){
		console.log(volunteer_data);
		// into the main index, updating the page
		return res.render('index', {volunteer_data})
	})
});

// post route to create burgers
router.post('/helpr/addproj', function(req, res) {
	// edited burger create to add in a burger_name
	Volunteer.create({project_name: req.body.project_name})
	// pass the result of our call
	.then(function(newProject){
		// log the result to our terminal/bash window
		console.log(newProject);
		// redirect
		res.redirect('/');
	});
});

// put route to devour a burger
router.put('helpr/search', function(req,res){
	// update one of the burgers
	Volunteer.findOne({where:{id: req.body.volunteer_id}})
	.then(function(theproject){
		return theBurger.updateAttributes({
			devoured: true
		}).then(function(){
			// reload the page
			res.redirect('/');
		})
	});
});

router.post('/helpr/help', function(req, res) {
	// edited burger create to add in a burger_name
	Volunteer.create({project_name: req.body.project_name})
	// pass the result of our call
	.then(function(newProject){
		// log the result to our terminal/bash window
		console.log(newProject);
		// redirect
		res.redirect('/');
	});
});

module.exports = router;
