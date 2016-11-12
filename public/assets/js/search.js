var searchContainer = $('<div class="container container-search" style="background-color: orange; height: 6em;">');

$('.container-title').after(searchContainer);

$('.container-search').html('<h2>search-results</h2>');

var currentUrl = window.location.origin;
console.log(currentUrl);

var search = $('#input-search').val();
var response = [{
	titleOfProject: "Paint Norma's Fence",
	location: "675 Mairo St, Austin, TX 78748",
	description: "paint a fence for norma, she is awesome",
	date: "08-20-2017",
	time: "3pm",
	role: "painter"
}, {
	titleOfProject: "Austin Food Pantry",
	location: "673 Mairo St, Austin, TX 78748",
	description: "stock cans for the hungry",
	date: "08-21-2017",
	time: "10am",
	role: "stocker"
}, {
	titleOfProject: "file papers for a professor",
	location: "671 Mairo St, Austin, TX 78748",
	description: "file all the newest research for a sociology professor",
	date: "08-22-2017",
	time: "12pm",
	role: "filer"

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
			var results = $('<div><h3>' + response[i].titleOfProject + '</h3><h4>' + response[i].role + '</h4><p>' + response[i].date + ' ' + &bull; + ' ' + response[i].time + '</p><p>' + response[i].location + '</p>' + '<div>map</div><p>' + response[i].description + '</p></div>');
			$('.container-search').append(results);
	}
} /* ); */
callback(response);