/* index:
	1.	from oauth we will get the input into the volunteer table.  how to select which volunteer we are using?
	2.  show all projects api call /helpr/search?
	3.  create projects submit api call /helpr/addproj?
	4.  sign up for projects submit api call /helpr/help?
*/

//just a comment

//***NEW STUFF TO ADD TO SQL FETCHING FILES *** volunteerID should be equal to the logged in user's primary key in the Volunteer table; perhaps a select statement added to orm file and called inside the showAllProj orm function that selects only the user currently using from the table like 'SELECT volunteer_id from Volunteer where login = true' in which case we would need to add a login true boolean to the Volunteer table and figure out a way to toggle it with the oauth login
	var volunteerID = 1;


//create search container
$(document).ready(function() {
	var currentUrl = window.location.origin;
	console.log(currentUrl);
	$('#project-submit').click(function() {
		console.log("I clicked");
		$('#current-projects-row').hide();
		$('#create-project-row').hide();
		$('#projects-near-you-row').hide();
		// create projects submit api call
		var addProject = {
			project_name: $('#project-name').val().trim(),
			project_date_time: $('#date-time').val().trim(), //with a function done to it to convert 	it to our standard format
			project_location: $('#location').val().trim(), //maybe use google geolocator if we get 	there
			project_description: $('#description').val().trim(),		
			project_duration: $('#duration').val().trim() //s/b a float
		};

		var projectParams = $.param(addProject);
		console.log('project params is: ' + projectParams);
//search for projects api call and display them in the search results

		$.get(currentUrl + '/helpr/addproj?' + projectParams, function callback(error, response) {
			if(err) throw err;
			console.log('if we"ve successfully entered a new project into sql we"ll get this non-null response is: \n\n' + response);
		//if we have a response we'll get a modal pop up telling us we actually added a project.
			if(response) {
				console.log('fire modal with entry successful');
				$('#current-projects-row').show();
				$('#create-project-row').show();
				$('#projects-near-you-row').show();
			} //add proj response if
		}); // add proj get callback
	});// add proj project submit


	$('#show-all-proj').click(function() {

		$('#current-projects-row').hide();
		$('#create-project-row').hide();
		$('#projects-near-you-row').hide();
		
		//*** QUESTION *** search has changed into just a display.  i don't think we need parameters but does the syntax of /helpr/search? need to change here and in the controller?
		$.get(currentUrl + '/helpr/search?', function callback(error, response) {
			if(error) throw error;
			console.log('show view all projects response: \n\n' + response + '\n\n end view all projects response');
	//response should be an array with objects inside.  *** ADJUST *** for actual response
			for(var i = 0; i < response.length; i++) {
				var results = $('<div class="search-results"><h3>' + response[i].project_name + '</h3><p>' + response[i].project_date_time + '</p><p>' + response[i].project_location + '</p><div>map</div><p>' + response[i].project_description + '</p><button class="join-up" type="button" data-proj=' + response[i].project_id + '">Volunteer Now</button></div>');
				$('.bkgrnd').after(results);
			} //show all proj for
		}); // show all proj get
	}); //show all proj on click
//render add yourself to a project fields in the html




//send inputs to the controller to the model to the orm to add a row to the join table holding the relationships between the volunteers and the projects.
	$('.join-up').click(function(event) {
		var addDoer = {
			proj_id: $(event.target).data('proj'),
			vol_id: volunteerID 
		};
		var doerParams = $.param(addDoer);
		$.get(currentUrl + '/helpr/help?' + doerParams, function(err, data) {
			if(err) throw err;
			console.log('this is the data from the joinproj callback: \n\n' + data + '\n\n end data from the joinproj callback');
			if(data) {
				//*** ADD *** input successful modal, once the input is successful we return to the search results, maybe the button changes color in the css
			}
		}); //joinproj callback
	}); //joinproj onclick function

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
