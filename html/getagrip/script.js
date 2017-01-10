var lat;
var lng;
var map;
var infowindow;

function getLocation(){ 
	if (navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(mapInitialise,showError);
		console.log("navigator");
    }
	else{
		lat = 50.8765003;
		lng = 0.5557942;
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
	var latlng = new google.maps.LatLng(lat,lng);
	var mapOptions = {
		zoom: 12,
		center: latlng
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "You're here"
	});
	
	document.getElementById("get-equipment").innerHTML = "";
	document.getElementById("places-to-play").innerHTML = "";
	var latLngsw = new google.maps.LatLng(lat-0.1,lng-0.1);
	var latLngne = new google.maps.LatLng(lat+0.1,lng+0.1);
	var bounds = new google.maps.LatLngBounds(latLngsw,latLngne);
	//https://developers.google.com/maps/documentation/javascript/places#place_search_requests
	request ={
	bounds: bounds,
	query: 'table tennis equipment',
	type: ['store']
	  };
	request1 = {
	bounds :bounds,
	//location: latlng,
	//radius: 100,
	query: 'table tennis'
	  };
	  infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);
	  service.textSearch(request, callback);
	  service.textSearch(request1, callback1);
}

function callback1(results, status) {
	console.log("calback1");
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 5; i++) {
	var place = results[i];
	var imgNo = i+1;
	var img = 'http://itsuite.it.brighton.ac.uk/nt104/ci240/a2/icons/blue/'+imgNo+'.png';
	createMarker(results[i],img);
	  var locLink = document.createElement("li");
	  locLink.innerHTML = "<img src='" + img + "' alt='' /> " + place.name;
	  var placeholder = document.getElementById("places-to-play");
	  placeholder.appendChild(locLink);
    }
  }
}

function callback(results, status) {
	console.log("calback");
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 5; i++) {
		var place = results[i];
		var imgNo = i+1;
		var img = 'http://itsuite.it.brighton.ac.uk/nt104/ci240/a2/icons/red/'+imgNo+'.png';
      createMarker(results[i],img);
	  var locLink = document.createElement("li");
	  locLink.innerHTML = "<img src='" + img + "' alt='' /> " + place.name;
	  var placeholder = document.getElementById("get-equipment");
	  
	  placeholder.appendChild(locLink);
    }
  }
}

function createMarker(place,img) {
  var placeLoc = place.geometry.location;
  var newMarker = new google.maps.Marker({
    map: map,
    position: placeLoc,
	icon: img,
	title:place.name
  });
  //var content = getPlaceInfo(place.reference);
  //console.log(content);
  google.maps.event.addListener(newMarker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function cantGetLocation(){
	lat = 51.482576,
	lng = 0.0076589;
	mapInitialise();
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQvVel4MCu9xMBvD_92qAuqjFrcnos0dc&libraries=geometry,places&sensor=false&callback=getLocation';
  document.body.appendChild(script);
}

function loadIframes(){
	$("#iframe1").append("<iframe src='topspin.html' scrolling='no'></iframe>");
	$("#iframe2").append("<iframe src='backspin2.html' scrolling='no'></iframe>");
}
	
