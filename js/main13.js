/* Functions for Lab 13 */
window.onload = function()
{
	document.getElementById('httpButton').addEventListener('click', renderText);
};

function renderText()
{
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function()
	{
		document.getElementById('demo').innerHTML = xhttp.responseText;
	}
	
	xhttp.open("GET", "../dsp/text.txt", true);
	
	xhttp.send();
	
};