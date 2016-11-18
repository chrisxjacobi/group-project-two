(function(window, google, mapster){

mapster.MAP_OPTIONS = {
	center:{
		lat: 30.2672, 
		lng: -97.7431
	},
	zoom: 13, 
	disableDefaultUI: true,
	scrollwheel: true,
	draggable: true,
	mapTypeId: google.maps.MapTypeId.HYBRID,
	minZoom: 12,
	maxZoom: 16,
	zoomControlOptions:{
		position: google.maps.ControlPosition.LEFT_BOTTOM,
		style: google.maps.ZoomControlStyle.DEFAULT
	}
};

}(window, google, window.Mapster || (window.Mapster = {})))