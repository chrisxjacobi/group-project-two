(function(window, mapster){
//map options
// var styles = [
//   {
//     featureType: 'water',
//     elementType: 'geometry.fill',
//     stylers: [
//       { color: '#adc9b8' }
//     ]
//   },{
//     featureType: 'landscape.natural',
//     elementType: 'all',
//     stylers: [
//       { hue: '#809f80' },
//       { lightness: -35 }
//     ]
//   }
// ];


var options = mapster.MAP_OPTIONS,
element = document.getElementById('map-canvas'),

//map 
map = mapster.create(element, options);

var marker = map.addMarker({
    lat: 30.2672, 
    lng: -97.7431,
    visible: true,
    content: 'Pack meals at homeless shelter, 2:00pm to 3:00pm, Saturday 12/15/2016',   
    icon: 'http://findicons.com/files/icons/951/google_maps/32/grocery.png'

      });

var marker2 =map.addMarker({

             "lat" : 30.32289789999999,
             "lng" : -97.7203332,
             visible: true,
             content:'Re-furbish a carport for local community member',
             icon: 'http://findicons.com/files/icons/951/google_maps/32/tools.png'
 });

var marker3 =map.addMarker({

             "lat" : 30.2672, 
             "lng" : -97.7831,
             visible: true,
             content:'Pack meals for missionaries at Church',
            icon: 'http://findicons.com/files/icons/951/google_maps/32/grocery.png'


 });

var marker4 =map.addMarker({

             "lat" : 30.2304809,
             "lng" : -97.7347722,
             visible: true,
             content:'Paint a house',
            icon: 'http://findicons.com/files/icons/951/google_maps/32/paint.png'

            
 });
var marker5 =map.addMarker({

              "lat" : 30.2917366,
             "lng" : -97.74986109999999,
             visible: true,
             content:'Fix Playground',
           icon: 'http://findicons.com/files/icons/951/google_maps/32/riparian.png'

            
 });
var marker6 =map.addMarker({

               "lat" : 30.3048581,
             "lng" : -97.6976228,
             visible: true,
             content:'Clean Up Bartholomew Park',
           icon: 'http://findicons.com/files/icons/951/google_maps/32/park.png'

            
 });


}(window,  window.Mapster));