(function(window, mapster){
//map options
var styles = [
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#adc9b8' }
    ]
  },{
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      { hue: '#809f80' },
      { lightness: -35 }
    ]
  }
];


var options = mapster.MAP_OPTIONS,
element = document.getElementById('map-canvas'),

//map 
map = mapster.create(element, options);


var marker = new google.maps.Marker({
	position:{
		lat: 30.2672, 
		lng: -97.7431
	},
	map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/grocery.png'
});

var marker2 = new google.maps.Marker({
	position:{

                  "lat" : 30.32289789999999,
                  "lng" : -97.7203332
               },
     map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/tools.png'
});

var marker3 = new google.maps.Marker({
	position: {
		"lat" : 30.2304809,
         "lng" : -97.7647722
     },
     map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/paint.png'
});

var marker4 = new google.maps.Marker({
	position: {
		"lat" : 30.2304809,
         "lng" : -97.7347722
     },
     map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/paint.png'
});

var marker4 = new google.maps.Marker({
	position: {
		"lat" : 30.2304809,
         "lng" : -97.7347722
     },
     map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/paint.png'
});
var marker4 = new google.maps.Marker({
	position:
				{
                  "lat" : 30.2917366,
                  "lng" : -97.74986109999999
               },
    map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/riparian.png'
});
var marker5 = new google.maps.Marker({
	position:
				 {
               "lat" : 30.3048581,
               "lng" : -97.6976228
            },
    map: map.gMap,
	icon: 'http://findicons.com/files/icons/951/google_maps/32/park.png'
	});




// var marker6 = new Marker({
// 	map: map,
// 	position: new google.maps.LatLng(30.2670, -97.7431),
// 	icon: {
// 		path: SQUARE_PIN,
// 		fillColor: '#00CCBB',
// 		fillOpacity: 1,
// 		strokeColor: '',
// 		strokeWeight: 0
// 	}
// 	map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
// });



}(window,  window.Mapster));