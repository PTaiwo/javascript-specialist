/* Functions for Lab 11 */
window.onload = function()
{
	var sentence = "This is to check how many vowels are in this sentence";
	alert(sentence.match(/[aeiou]/gi).length);
	
	
	var myString = "Today we break bread and drink wine, tomorrow we go to war against each other.";
	
	
		
		if (/^[A-Z]/.test(myString))
		{
			document.getElementById('result').innerHTML += "Your first character in the sentence is UpperCase";
		}
		else
		{
			document.getElementById('result').innerHTML += "Your first character in the sentence is LowerCase";
		}
	
			
}