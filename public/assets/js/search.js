/* index:
	1.  create search container
	2.  search projects api call
	3.  create projects submit api call
	4.  sign up for projects submit api call
*/



//create search container

var searchContainer = $('<div class="container container-search" style="background-color: orange; height: 6em;"><div class="row"><div class="col col-xs-12 col-search"></div></div></div>');

$('.jumbotron').after(searchContainer);

$('.col-search').html('<h2>search-results</h2>');

//search for projects api call


var currentUrl = window.location.origin;
console.log(currentUrl);

var search = $('#input-search').val();
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
/* $.ajax(currentUrl + '/search?' + search)
.done( */
	function callback(response) {
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
callback(response);

// create projects submit api call

