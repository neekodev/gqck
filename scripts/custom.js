$(function () {
    function defMap() {

        var location = new google.maps.LatLng(10.3224, 123.9044);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        var contentString = '<div class="info-window">' +
                '<h3>Cebu Grand Convention Center</h3>' +
                '' +
                '<p><strong>This is where are you now at.</strong> <br> <strong>Address:</strong> Archbishop Reyes Ave, Cebu City, 6000 Cebu <br> <strong>Phone:</strong> (032) 260 8000</p>' +
                '' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "off"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "off"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#46bcec"}]}];

        map.set('styles', styles);

    }

    google.maps.event.addDomListener(window, 'load', defMap);

    function initMap() {
        var collectorLocation = new google.maps.LatLng(10.3124, 123.9074);
        var yourLocation = new google.maps.LatLng(10.3224, 123.9044);

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
            ['Cebu Grand Convention Center', 10.3224, 123.9044],
            ['Asuki Opascor', 10.310631,123.921616],
            ['Garbage Collection Section Office', 10.309198,123.897767],
            ['Cebu City Government Department of Public Services - Administrative Division', 10.3047389, 123.89885140000001],
            ['Cebu Megalube', 10.362679, 123.98226799999998]
        ];

        var infoWindowContent = [
            ['<div class="info_content">' +
            '<h3>Cebu Grand Convention Center</h3>' +
            '<p><strong>This is where are you now at. </strong> <br> <strong>Address:</strong> Archbishop Reyes Ave, Cebu City, 6000 Cebu <br> <strong>Phone:</strong> (032) 260 8000</p>' +        '</div>'],
            ['<div class="info_content">' +
            '<h3>Asuki Opascor</h3>' +
            '<p><strong>Address:</strong> Sergio Osmena St., Cebu City, 6000 Cebu <br> <strong>Phone:</strong> (032) 345 6111 <br><br> <strong>How to Dispose of Garbage Properly?</strong> <br>'+ 
            '<a style="color: 028AC6;" target="_blank" href="https://www.hunker.com/13420945/how-to-dispose-of-garbage-properly">Click for more info. . .</a>'+ 
            '<br><br> <strong>Collection Schedule:</strong> <a style="color: 028AC6;" href="collection-schedule.html">Click for more info. . .</a> <br> <strong>Collection Instruction:</strong> <a style="color: 028AC6;" href="javascript:void(0);">Click for more info. . .</a> <br> <strong>Feed:</strong> <a style="color: 028AC6;" href="feed.html">Click for more info. . .</a>' +        '</div>'],
            ['<div class="info_content">' +
            '<h3>Garbage Collection Section Office</h3>' +
            '<p><strong>Address:</strong> Ramos Supermarket Building, Singson Street, Cebu City, 6000 Cebu <br> <strong>Phone:</strong> (032) 254 9271 <br><br> <strong>How to Dispose of Garbage Properly?</strong> <br>'+ 
            '<a style="color: 028AC6;" target="_blank" href="https://www.hunker.com/13420945/how-to-dispose-of-garbage-properly">Click for more info. . .</a> <br><br> <strong>Collection Schedule:</strong> <a style="color: 028AC6;" href="collection-schedule.html">Click link for more info. . .</a> <br> <strong>Collection Instruction:</strong> <a style="color: 028AC6;" href="javascript:void(0);">Click for more info. . .</a> <br> <strong>Feed:</strong> <a style="color: 028AC6;" href="feed.html">Click for more info. . .</a></p>' +
            '</div>'],
            ['<div class="info_content">' +
            '<h3>Cebu City Government Department of Public Services - Administrative Division</h3>' +
            '<p><strong>Address:</strong> 2nd Floor, Ramos Supermarket Building, Barangay Cogon Ramos, Cebu City, Cebu <br> <strong>Phone:</strong> (032) 238 3990 <br><br> <strong>How to Dispose of Garbage Properly?</strong> <br>'+ 
            '<a style="color: 028AC6;" target="_blank" href="https://www.hunker.com/13420945/how-to-dispose-of-garbage-properly">Click for more info. . .</a> <br><br> <strong>Collection Schedule:</strong> <a style="color: 028AC6;" href="collection-schedule.html">Click link for more info. . .</a> <br> <strong>Collection Instruction:</strong> <a style="color: 028AC6;" href="javascript:void(0);">Click for more info. . .</a> <br> <strong>Feed:</strong> <a style="color: 028AC6;" href="feed.html">Click for more info. . .</a></p>' +
            '</div>'],
            ['<div class="info_content">' +
            '<h3>Cebu Megalube</h3>' +
            '<p><strong>Address:</strong> Tayud, Consolacion, Cebu, Consolacion, 6001 Cebu <br> <strong>Phone:</strong> (032) 266 1268 <br><br> <strong>How to Dispose of Garbage Properly?</strong> <br>'+ 
            '<a style="color: 028AC6;" target="_blank" href="https://www.hunker.com/13420945/how-to-dispose-of-garbage-properly">Click for more info. . .</a> <br><br> <strong>Collection Schedule:</strong> <a style="color: 028AC6;" href="collection-schedule.html">Click link for more info. . .</a> <br> <strong>Collection Instruction:</strong> <a style="color: 028AC6;" href="javascript:void(0);">Click for more info. . .</a> <br> <strong>Feed:</strong> <a style="color: 028AC6;" href="feed.html">Click for more info. . .</a></p>' +
            '</div>']
        ];

        var infoWindow = new google.maps.InfoWindow(), marker, i;

        /*marker = new google.maps.Marker({
            position: yourLocation,
            map: map
        }); */

        var flightPlanCoordinates;

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
            var flightPath;
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                    flightPlanCoordinates = [ {lat: 10.3224, lng: 123.9044}, {lat: markers[i][1], lng: markers[i][2]}];
                    flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#01C653',
                    strokeOpacity: 2.0,
                    strokeWeight: 2
                    });
                    flightPath.setMap(null);
                    flightPath.setMap(map);
                }
            })(marker, i));
        }

        map.fitBounds(bounds);

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "off"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "off"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#46bcec"}]}];

        map.set('styles', styles);
    }

    var search = document.getElementById('search');
    google.maps.event.addDomListener(search, 'click', initMap);

    $('#map').hide();
    $('#search').hide();
    $('#intro').delay(3000).fadeOut("slow", function() {
        $( "#container" ).fadeIn( "slow", function() {
            $( "#map" ).fadeIn( "slow", function() {
            $('#search').show();
        });
        });
    });
});