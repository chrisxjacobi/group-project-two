(function(window,google) {

var Mapster = (function() {
	function Mapster(element, opts) {
		this.gMap = new google.maps.Map(element, opts); // we can call this to create a new map for event creators
}
Mapster.prototype = {

};
	
	return Mapster;
}());
Mapster.create = function(element, opts) {
	return new Mapster(element, opts);
};

window.Mapster = Mapster;
}(window, google));