$(function () {

    function initMap() {
        var collectorLocation = new google.maps.LatLng(10.327344, 123.906180);
        var yourLocation = new google.maps.LatLng(10.3417, 123.8975);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: collectorLocation,
            zoom: 14,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'http://maps.google.com/mapfiles/ms/icons/recycle.png';

        var bounds = new google.maps.LatLngBounds();

        var markers = [
            ['Marco Polo', 10.3417, 123.8975],
            ['Asuki Opascor', 10.310631,123.921616],
            ['Garbage Collection Section Office', 10.309198,123.897767]
        ];

        var infoWindowContent = [
            ['<div class="info_content">' +
            '<h3>Marco Polo Cebu</h3>' +
            '<p><strong>Your location</strong></p>' +        '</div>'],
            ['<div class="info_content">' +
            '<h3>Asuki Opascor</h3>' +
            '<p>Info here. . .</p>' +        '</div>'],
            ['<div class="info_content">' +
            '<h3>Garbage Collection Section Office</h3>' +
            '<p>Info here. . .</p>' +
            '</div>']
        ];

        var infoWindow = new google.maps.InfoWindow(), marker, i;

        /*marker = new google.maps.Marker({
            position: yourLocation,
            map: map
        }); */

        for( i = 0; i < markers.length; i++ ) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            
            if (i == 0) {
                marker = new google.maps.Marker({
                    position: yourLocation,
                    map: map
                });
            }else {
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: markerImage
                });
            }
            // Allow each marker to have an info window 
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));

            // Automatically center the map fitting all markers on the screen
        }

       // / map.fitBounds(bounds);

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "off"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "off"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#46bcec"}]}];

        map.set('styles', styles);
    }

    google.maps.event.addDomListener(window, 'load', initMap);

    $('#map').hide();
    $('#intro').delay(3000).fadeOut("slow", function() {
        $( "#map" ).fadeIn( "slow", function() {
        });
    });
});