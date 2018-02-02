window.onload = function()
{
	document.getElementById('getLocationBtn').addEventListener('click', grabLocation);
}

function grabLocation()
{
	navigator.geolocation.getCurrentPosition(showGoogleLink, error);
	
}	



function error()
{
	alert("There was an error");
}

function showGoogleLink(position)
{
	var myLocation = document.getElementById('mapsLink');
	
	myLocation.innerHTML = "<a href=https://www.google.com/@" + position.coords.latitude + "," + position.coords.longitude + "> CLICK ME </a>";
}