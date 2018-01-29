/*These are the functions for chapter 7 labs */
window.onload = function()
{
	document.getElementById('confirmButton').addEventListener('click', runConfirm);	
	
	document.getElementById('nameButton').addEventListener('click', displayName);
}

function runConfirm()
{
	var message;
	
	if(confirm("Press a button!") == true)
	{
		message = "You pressed OK!";
	} else
	{
		message = "You pressed Cancel!";
	}
	
	document.getElementById('text').innerHTML = message;
}

function displayName(e)
{
	    document.getElementById('text2').innerHTML = "";
	
		var name = prompt("What is your name?");
	{
		document.getElementById('text2').innerHTML += "<h3><em> " + name + " </em></h3>";
				
	}
	
}