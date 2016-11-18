/* index:
	1.	from oauth we will get the input into the volunteer table.  how to select which volunteer we are using?
	2.  show all projects api call /helpr/search?
	3.  create projects submit api call /helpr/addproj?
	4.  sign up for projects submit api call /helpr/help?
*/

//just a comment

//get the current url for all api calls
	var currentUrl = window.location.origin;
	console.log(currentUrl);

//***NEW STUFF TO ADD TO SQL FETCHING FILES *** volunteerID should be equal to the logged in user's primary key in the Volunteer table; perhaps a select statement added to orm file and called inside the showAllProj orm function that selects only the user currently using from the table like 'SELECT volunteer_id from Volunteer where login = true' in which case we would need to add a login true boolean to the Volunteer table and figure out a way to toggle it with the oauth login
	var volunteerID = 1;


$(document).ready(function() {
	// log-in nav bar changes to log in name when you click sign-in
	$('#hi').hide();
	$('#sign-in').on('click', function(){
		var userName = $('#your-name').val().trim();
		console.log(userName);
		$('#log-in').hide();
		$('#hi').show();
		$('#hi').html("Hi,  " + userName);
	});

function showAllProj() {
	// get api call to get all the projects from the sql, orm, model, and controller and the callback displays them
	$.get(currentUrl + '/helpr/search?', function(error, response, data) {
		//if(error) throw error;
		console.log('data is ' + JSON.stringify(data));
		console.log('data.project.length ' + data.responseText.project.length);
		//console.log('show view all projects response: \n\n' + response + '\n\n end view all projects response');
		//hide the main page modules because the search results will take over
		$('#current-projects-row').hide();
		$('#create-project-row').hide();
		$('#projects-near-you-row').hide();
		//create a container to hold all the search results and a button to go back to the main view
		var addEmAll = $('<div class="container-fluid" id="add-em-all"><div class="row"><div class="col col-xs-12" id="search-results"></div><div class="col col-xs-12"><button type="button" id="show-main">Go Back</button></div></div></div>');
		$('.jumbotron').after(addEmAll);
		//response should be an array with objects inside.  *** ADJUST FOR LOOP *** for actual response
		for(var i = 0; i < data.project.length; i++) {
			var results = $('<div class="indiv-results"><h3>' + data.project[i].project_name + '</h3><p>' + data.project[i].project_date_time + '</p><p>' + data.project[i].project_location + '</p><div>map</div><p>' + data.project[i].project_description + '</p><button class="join-up" type="button" data-proj="' + data.project[i].project_id + '">Volunteer Now</button></div>');
			$('#search-results').append(results);
		} //show all proj for
	}); // show all proj get
}

	//onclick adds a new project
	$('#project-submit').click(function() {
		console.log("I clicked add a new project");
		// create projects submit api call obj
		var addProject = {
			project_name: $('#project-name').val().trim(),
			project_date_time: $('#date-time').val().trim(), //with a function done to it to convert 	it to our standard format
			project_location: $('#location').val().trim(), //maybe use google geolocator if we get 	there
			project_description: $('#description').val().trim(),
			project_duration: $('#duration').val().trim() //s/b a float
		};
		//parameterize the addproject api call obj
		var projectParams = $.param(addProject);
		console.log('project params is: ' + projectParams);

		//get api call to add a project through the controller, model, and orm to the sql

		$.get(currentUrl + '/helpr/addproj?' + projectParams, function(error, response) {
			if(err) throw err;
			console.log('if we"ve successfully entered a new project into sql we"ll get this non-null response is: \n\n' + response);
		// *** ADD MODAL *** if we have a response we'll get a modal pop up telling us we actually added a project.
			if(response) {
				console.log('fire modal with entry successful');
				$('[data-remodal-id=add-proj-modal]').remodal().open();
			} //add proj response if
		}); // add proj get callback
	});// add proj project submit

	//onclick to show all the projects in the sql
	$('#show-all-proj').click(function() {
		console.log("on click is working");
		showAllProj();
	}); //show all proj on click

	$('#current-projects-row').click(function() {
		showAllProj();
	}); //show all proj on click of glyphicon section

	//onclick to revert to the main page after viewing search results
	$('#show-main').click(function() {
		$('#current-projects-row').show();
		$('#create-project-row').show();
		$('#projects-near-you-row').show();
		$('#add-em-all').hide();
	}); //show-main onclick end

	//onclick join up to send inputs via a get call to the controller to the model to the orm to add a row to the join table holding the relationships between the volunteers and the projects.
	$('.join-up').click(function(e) {
		//create the obj to add the doer to the join table
		var addDoer = {
			proj_id: $(e.target).data('proj'),
			vol_id: volunteerID
		};
		//parameterize the doer obj to send it to the controller
		var doerParams = $.param(addDoer);
		//get call
		$.get(currentUrl + '/helpr/help?' + doerParams, function(err, data) {
			if(err) throw err;
			console.log('this is the data from the joinproj callback: \n\n' + data + '\n\n end data from the joinproj callback');
			if(data) {
				//*** ADD *** input successful modal, once the input is successful we return to the search results, maybe the button changes color in the css
				$('[data-remodal-id=join-proj-modal]').remodal().open();
			}
		}); //joinproj callback
	}); //joinproj onclick function

	$('#sign-up').click(function () {
		window.location.href = 'http://accounts.google.com/';
	});//sign-up click event

	$('#sign-in').click(function() {
		console.log('sign-in clicked');
		//oauth code
	});//sign in  click event

}); //document ready


//this response object approximates the sql response to the view all projects function so that we can test the jquery get callback function.  comment out when mvp.
		// var response = [{
		// 	project_name: "Paint Norma's Fence",
		// 	project_location: "675 Mairo St, Austin, TX 78748",
		// 	project_description: "paint a fence for norma, she is awesome",
		// 	project_date_time: '2017-08-20 15:00',
		// 	project_duration: 4
		// }, {
		// 	project_name: "Austin Food Pantry",
		// 	project_location: "673 Mairo St, Austin, TX 78748",
		// 	project_description: "stock cans for the hungry",
		// 	project_date_time: '2017-08-21 10:00',
		// 	project_duration: 2.5
		// }, {
		// 	project_name: "file papers for a professor",
		// 	project_location: "671 Mairo St, Austin, TX 78748",
		// 	project_description: "file all the newest research for a sociology professor",
		// 	project_date_time: '2017-08-22 12:00',
		// 	project_duration: 3

		// }];
