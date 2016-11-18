(function(window, google) {

var Mapster = (function() {
	function Mapster(element, opts) {
		this.gMap = new google.maps.Map(element, opts); // we can call this to create a new map for event creators
}
Mapster.prototype = {
zoom: function(level) {
		if (level) {
			this.gMap.setZoom(level);
		} else {
			return this.gMap.getZoom();
		}
	},
// 	_on: function(opts){
// 		var self = this;
// 		google.maps.event.addListener(opts.obj, opts.event, function(e){
// 			opts.callback.call(self, e);
// 	});
// },

//  	addMarker: function(lat, lng){
// 	var marker;
// 	opts.position = {
// 			lat: opts.lat,
// 			lng: opts.lng
// 	}
	
// 	marker = this._CreateMarker: function(opts);
// 		opts.map = this.gMap
// 		return new google.maps.Marker(opts);
// 		if (opts.event) {
// 			this._on({
// 				obj: marker
// 			});
// 		}
// 	},
// 	 marker = _create Marker: function(opts) {
// 		opts.map = this.gmap;
// 		return new google.maps.Marker(opts);
// 	}
};
	return Mapster;
}());
Mapster.create = function(element, opts) {
	return new Mapster(element, opts);
};

window.Mapster = Mapster;
}(window, google));