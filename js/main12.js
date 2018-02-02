/* Functions for Lab 12 */
	function greenWords()
	{
		var boldWords = document.getElementsByTagName('strong');
		
		for (var i = 0; i < boldWords.length; i++)
		{
			boldWords[i].style.color = 'green';
		}
	}
	
	function returnColor()
	{
		var boldWords = document.getElementsByTagName('strong');
		
		for (var i = 0; i < boldWords.length; i++)
		{
			boldWords[i].style.color = 'black';
		}
	}

window.onload = function()
{	
	document.getElementById('popOff').addEventListener('click', teamRemove);
	
	function teamRemove()
	{
		var theList = document.getElementById('teamList');
		//console.log(theList);		
	
		
		theList.removeChild(theList.childNodes[3]);
		
		alert("You removed a team from the list");
	}
}
		