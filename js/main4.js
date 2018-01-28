/* Functions for Lab 4 exercise */
window.onload = function()
{
	document.getElementById('findNameBtn').addEventListener('click', lookForName);
}

function lookForName(e)
{
	var myName = "Joe";
	var timesFound = [];
	var text = document.getElementById('inputNameBox').value
	
	for (var i = 0; i < text.length; i++) {
		if (text[i] === "J") {
			for (var j = i; j < (myName.length + i); j++) {
				timesFound.push(text[j]);
  }
 console.log(timesFound);
        if (timesFound.length === 0) {
	        alert("Your name wasn't found!");
        } else {
	        alert(timesFound);
        }	
   }
 }
}