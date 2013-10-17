function lookup_location() {
  geoPosition.getCurrentPosition(showGeo, showGeoError);
}

function showGeo(loc) {
  $("#geo").html("lat: " + loc.coords.latitude + " long: " + loc.coords.longitude);
}

function showGeoError() {
  $("#geo").html('Unable to determine your location.');
}

$( document ).ready(function() {

	$("#geo").hide();
	$("#gyro").hide();
	
	lookup_location();
	
	$("#navigation li a").click(function() {
			//console.log("id: "+$(this).attr("href"));
			var id = $(this).attr("href");
			$(".content_container").hide();
			$(id).show();			
	});

});
