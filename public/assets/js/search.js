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
	$.get(currentUrl + '/helpr/search?', function(data) {
		//if(error) throw error;
		// console.log('data is ' + JSON.stringify(data));
		// console.log('data.project.length ' + data.project.length);
		//console.log('show view all projects response: \n\n' + response + '\n\n end view all projects response');
		//hide the main page modules because the search results will take over
		$('#current-projects-row').hide();
		$('#create-project-row').hide();
		$('#projects-near-you-row').hide();
		$('#add-em-all').show();
		//create a container to hold all the search results and a button to go back to the main view
		//response should be an array with objects inside.  *** ADJUST FOR LOOP *** for actual response
		for(var i = 0; i < data.project.length; i++) {
			var results = $('<div class="row">');
	
			var imgResult = $('<div class="col col-xs-4 col-result-img"><img alt="project-related image" src="' + data.project[i].project_img + '" /></div>');
			var textResult = $('<div class="indiv-results"><h3>' + data.project[i].project_name + '</h3><p>' + data.project[i].project_date_time + '</p><p>' + data.project[i].project_location + '</p><div>map</div><p>' + data.project[i].project_description + '</p></div>');
			var volBtn = $('<button class="btn btn-large btn-primary join-up" type="button" data-proj="' + data.project[i].project_id + '" data-proj-name="' + data.project[i].project_name + '">Volunteer Now</button>');
			textResult.append(volBtn);
			results.append(imgResult);
			results.append(textResult);

			$('#add-em-all').append(results);

		} //show all proj for
		var goBack = $('<div class="col col-xs-12 text-center"><button class="btn btn-large btn-primary back-btn show-main" type="button">Go Back</button></div>');
		$('#add-em-all').append(goBack);

		$('.show-main').click(function() {
			$('#current-projects-row').show();
			$('#create-project-row').show();
			$('#projects-near-you-row').show();
			$('#add-em-all').hide();
			$('#add-em-all').empty();
			$('#show-all-proj').click(function() {
				console.log("on click is working");
				showAllProj();
				$('#show-all-proj').off();
			}); //show all proj on click
			// $('#current-projects-row').click(function() {
			// 	showAllProj();
			// }); //show all proj on click of glyphicon section
		}); //show-main onclick end


		$('.join-up').click(function(e) {
			console.log('join up click event has fired');
			var yourEmail = $('#your-email').val().trim();
			var projName = $(e.target).data('proj-name');
			$('#modal-join').text('Thanks for volunteering!  You have joined the project ' + projName + '.  The email we have on record for you is ' + yourEmail + '.  We will contact you shortly with more details.');
			var inst = $('[data-remodal-id=join-proj-modal]').remodal();
			inst.open();
		});//join up click event
	}); // show all proj get



} //show all proj function

	//onclick adds a new project
	$('#project-submit').click(function() {
		console.log("I clicked add a new project");
		// create projects submit api call obj
		var addProject = {
			project_name: $('#project-name').val().trim(),
			project_date_time: $('#date-time').val().trim(), //with a function done to it to convert 	it to our standard format
			project_location: $('#location').val().trim(), //maybe use google geolocator if we get 	there
			project_description: $('#description').val().trim(),
			project_duration: $('#duration').val().trim(), //s/b a float
			project_img: $('#proj-img').val().trim()

		};
		//parameterize the addproject api call obj
		var projectParams = $.param(addProject);
		console.log('project params is: ' + projectParams);

		//get api call to add a project through the controller, model, and orm to the sql

		// $.get(currentUrl + '/helpr/addproj?' + projectParams, function(error, response) {
		// 	console.log(error);
		// 	if(error) throw error;
		//
		// 	console.log('if we"ve successfully entered a new project into sql we"ll get this non-null response is: \n\n' + response);
		// // *** ADD MODAL *** if we have a response we'll get a modal pop up telling us we actually added a project.
		// 	if(response) {
		// 		console.log('fire modal with entry successful');
		// 		$('[data-remodal-id=add-proj-modal]').remodal().open();
		// 	} //add proj response if
		// }); // add proj get callback
		$.ajax({
    		url: currentUrl + '/helpr/addproj?' + projectParams,
    		type: 'POST',
    		success: function(result) {
        	// Do something with the result
			console.log(result);
			var addProjName = $('#project-name').val();
			$('#modal-add').text('You have added the project ' + addProjName + '.  Sit back and watch the help roll in!');
			var inst = $('[data-remodal-id=add-proj-modal]').remodal();
			inst.open();
			$('.ap').val('');
    		}
		});

	});// add proj project submit

	//onclick to show all the projects in the sql
	$('#show-all-proj').click(function() {
		console.log("on click is working");
		showAllProj();
		$('#show-all-proj').off();
	}); //show all proj on click

	$('#current-projects-row').click(function() {
		showAllProj();
	}); //show all proj on click of glyphicon section

	//onclick to revert to the main page after viewing search results

	//SINCE we're not logging in we don't need to do a join to persist your choice.  onclick join up to send inputs via a get call to the controller to the model to the orm to add a row to the join table holding the relationships between the volunteers and the projects.
	// $('.join-up').click(function(e) {
	// 	//create the obj to add the doer to the join table
	// 	var addDoer = {
	// 		proj_id: $(e.target).data('proj'),
	// 		vol_id: volunteerID
	// 	};
	// 	//parameterize the doer obj to send it to the controller
	// 	var doerParams = $.param(addDoer);
	// 	//get call
	// 	$.get(currentUrl + '/helpr/help?' + doerParams, function(err, data) {
	// 		if(err) throw err;
	// 		console.log('this is the data from the joinproj callback: \n\n' + data + '\n\n end data from the joinproj callback');
	// 		if(data) {
	// 			//*** ADD *** input successful modal, once the input is successful we return to the search results, maybe the button changes color in the css
	// 			$('[data-remodal-id=join-proj-modal]').remodal().open();
	// 		}
	// 	}); //joinproj callback
	// }); //joinproj onclick function

	// $('#sign-up').click(function () {
	// 	window.location.href = 'http://accounts.google.com/';
	// });//sign-up click event

	$('#sign-in').click(function() {
		console.log('sign-in clicked');
		//oauth code
	});//sign in  click event

}); //document ready
