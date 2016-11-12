/* index:
	1.  create search container
	2.  search projects api call /helpr/search?
	3.  create projects submit api call /helpr/addproj?
	4.  sign up for projects submit api call /helpr/help?
*/



//create search container
$(document).ready(function() {
var searchContainer = $('<div class="container container-search" style="background-color: orange; height: 6em;"><div class="row"><div class="col col-xs-12 col-search"></div></div></div>');

$('.jumbotron').after(searchContainer);

$('.col-search').html('<h2>search-results</h2>');

//search for projects api call


var currentUrl = window.location.origin;
console.log(currentUrl);

var searchTerm = $('#input-search').val();
var response = [{
	projectName: "Paint Norma's Fence",
	location: "675 Mairo St, Austin, TX 78748",
	description: "paint a fence for norma, she is awesome",
	dateTime: '2017-08-20 15:00',
	role: "painter",
	duration: 4
}, {
	projectName: "Austin Food Pantry",
	location: "673 Mairo St, Austin, TX 78748",
	description: "stock cans for the hungry",
	dateTime: '2017-08-21 10:00',
	role: "stocker",
	duration: 2.5
}, {
	projectName: "file papers for a professor",
	location: "671 Mairo St, Austin, TX 78748",
	description: "file all the newest research for a sociology professor",
	dateTime: '2017-08-22 12:00',
	role: "filer",
	duration: 3

}];
/* $.get(currentUrl + '/helpr/search?' + searchTerm, */
	function callback(error, response) {
		//if(error) throw error;
		$('.container-projects').hide();
		$('.container-create').hide();
		$('.container-nearby').hide();
		console.log(response);
	//response should be an array with objects inside
		for(var i = 0; i < response.length; i++) {
			var results = $('<div><h3>' + response[i].titleOfProject + '</h3><h4>' + response[i].role + '</h4><p>' + response[i].date + ' &bull; ' + response[i].time + '</p><p>' + response[i].location + '</p>' + '<div>map</div><p>' + response[i].description + '</p></div>');
			$('.col-search').append(results);
		}
	} /* ); */
callback(null, response);

// create projects submit api call

var addProject = {
	project_name: $('#project-name').val().trim(),
	project_date_time: $('#date-time').val().trim(), //with a function done to it to convert it to our standard format
	project_location: $('#location').val().trim(), //maybe use google geolocator if we get there
	project_description: $('#description').val().trim(),
	project_role: $('#roles').val(),
	project_duration: $('#duration').val().trim() //s/b a float
	
}

var projectParams = $.param(addProject);

$.get(currentUrl + '/helpr/addproj?' + projectParams, function(err, data) {
	//if(err) throw err;
	console.log(data)
}); //get add proj

//render add yourself to a project fields



//add yourself to a project; volunteer

var addDoer = {
	project_name: $('#proj-volunteer-input').val(),
	volunteer_name: $('#volunteer-name-input').val().trim(),
	project_role: $('#roles').val()
}

var doerParams = $.param(addDoer);
$.get(currentUrl + '/helpr/help?' + doerParams, function(err, data) {
	//if(err) throw err;
	console.log(data)
}); //get add volunteer


}); //document ready
