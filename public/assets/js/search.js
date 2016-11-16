/* index:
	1.  create search container
	2.  search projects api call /helpr/search?
	3.  create projects submit api call /helpr/addproj?
	4.  sign up for projects submit api call /helpr/help?
*/



//create search container
$(document).ready(function() {

// *****REYES QUERY CODE START*****
$('#project-submit').on('click', function() {
	console.log("I clicked");
	// create projects submit api call
	var addProject = {
		project_name: $('#project-name').val().trim(),
		project_date_time: $('#date-time').val().trim(), //with a function done to it to convert it to our standard format
		project_location: $('#location').val().trim(), //maybe use google geolocator if we get there
		project_description: $('#description').val().trim(),
		project_role: $('#roles').val(),
		project_duration: $('#duration').val().trim() //s/b a float
	};

	var projectParams = $.param(addProject);
	console.log(projectParams);

	// addNewProject();
});
function conjoin() {
	// orm code for adding a project and a volunteer in union to the permanent inner join database

}
// *****REYES QUERY CODE END*****


// var searchContainer = $('<div class="container container-search" style="background-color: orange; height: 6em;"><div class="row"><div class="col col-xs-12 col-search"></div></div></div>');
//
// $('.jumbotron').after(searchContainer);
//
// $('.col-search').html('<h2>search-results</h2>');

//search for projects api call and display them in the search results


var currentUrl = window.location.origin;
console.log(currentUrl);


//how do we use the input from the search bar to search the fields in the response?  must be in the sequelize
var searchTerm = $('#input-search').val();
var response = [{
	project_name: "Paint Norma's Fence",
	project_location: "675 Mairo St, Austin, TX 78748",
	project_description: "paint a fence for norma, she is awesome",
	project_date_time: '2017-08-20 15:00',
	project_role: "painter",
	project_duration: 4
}, {
	project_name: "Austin Food Pantry",
	project_location: "673 Mairo St, Austin, TX 78748",
	project_description: "stock cans for the hungry",
	project_date_time: '2017-08-21 10:00',
	project_role: "stocker",
	project_duration: 2.5
}, {
	project_name: "file papers for a professor",
	project_location: "671 Mairo St, Austin, TX 78748",
	project_description: "file all the newest research for a sociology professor",
	project_date_time: '2017-08-22 12:00',
	project_role: "filer",
	project_duration: 3

}];

$.get(currentUrl + '/helpr/search?' + searchTerm,
	function callback(error, response) {
		//if(error) throw error;
		//in the callback hide the main page modules
		$('.container-projects').hide();
		$('.container-create').hide();
		$('.container-nearby').hide();
		console.log(response);
	//response should be an array with objects inside
		for(var i = 0; i < response.length; i++) {
			var results = $('<div><h3>' + response[i].project_name + '</h3><h4>' + response[i].project_role + '</h4><p>' + response[i].project_date_time + '</p><p>' + response[i].project_location + '</p>' + '<div>map</div><p>' + response[i].project_description + '</p></div>');
			$('.col-search').append(results);
		}
	});
callback(null, response);

<<<<<<< HEAD
// create projects submit api call, show modal with input success

var addProject = {
	project_name: $('#project-name').val().trim(),
	project_date_time: $('#date-time').val().trim(), //with a function done to it to convert it to our standard format
	project_location: $('#location').val().trim(), //maybe use google geolocator if we get there
	project_description: $('#description').val().trim(),
	project_role: $('#roles').val(),
	project_duration: $('#duration').val().trim() //s/b a float

}

var projectParams = $.param(addProject);

=======
>>>>>>> ba9d2cce708df094f41ce06b78f3a38a4a3d68c2
$.get(currentUrl + '/helpr/addproj?' + projectParams, function(err, data) {
	//if(err) throw err;
	console.log(data);
}); //get add proj

//render add yourself to a project fields in the html




//add yourself to a project; volunteer, show input success modal

var addDoer = {
	project_name: $('#proj-volunteer-input').val(),
	volunteer_name: $('#volunteer-name-input').val().trim(),
	project_role: $('#roles').val()
};

var doerParams = $.param(addDoer);
$.get(currentUrl + '/helpr/help?' + doerParams, function(err, data) {
	//if(err) throw err;
	console.log(data);
}); //get add volunteer


}); //document ready
