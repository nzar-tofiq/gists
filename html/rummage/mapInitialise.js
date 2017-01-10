//http://gmap-tutorial-101.appspot.com/mapsapi101/toc
//http://www.w3schools.com/html/html5_geolocation.asp
var directionsDisplay;
var directionsService;
var map;
var lat;
var lng;
var map;
var infowindow;
var id;

function getLocation(){
  directionsService = new google.maps.DirectionsService();  
  directionsDisplay = new google.maps.DirectionsRenderer();
  
  // Style
  var MY_MAPTYPE_ID = 'uk.ac.brighton.rummage';
  var featureOpts = [
    {
      stylers: [
        { hue: '#890000' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#890000' }
      ]
    }
  ];
  var styledMapOptions = {
   name: 'Rummage'
  };
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


  
  var hastings = new google.maps.LatLng(50.856771, 0.578294);
  var mapOptions = {
    zoom:7,
    center: hastings,
	
	//style
	mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  //style
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  
  
  directionsDisplay.setMap(map);

	if (navigator.geolocation){
		id = navigator.geolocation.watchPosition(mapInitialise, showError)
    	//navigator.geolocation.getCurrentPosition(mapInitialise,showError);
		console.log("navigator");
    }
	else{
		cantGetLocation();
		x.style.visibility ="visible";
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showError(error){
	x = document.getElementById('mapError');
	switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML = "PERMISSION_DENIED";
	  cantGetLocation();
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "POSITION_UNAVAILABLE";
	  cantGetLocation();
      break;
    case error.TIMEOUT:
      x.innerHTML = "TIMEOUT";
	  cantGetLocation();
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "UNKNOWN_ERROR";
	  cantGetLocation();
      break;
    }
}

function mapInitialise(position) {
	console.log("mapInitialise")
	if(position){
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		console.log("position");
	}
	
	  var start = new google.maps.LatLng(lat,lng);
  var end = new google.maps.LatLng(50.856703, 0.581765);
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
	
	return latlng = new google.maps.LatLng(lat,lng);
	
}

function cantGetLocation(){
	lat = 51.482576,
	lng = 0.0076589;
	mapInitialise();
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQvVel4MCu9xMBvD_92qAuqjFrcnos0dc&libraries=geometry,places&sensor=true&callback=getLocation';
  document.body.appendChild(script);
}
window.onload = loadScript;


