/* Functions for Lab 9 */
window.onload = function()
{
	var sentence = "sally likes fruit.";
	
	function capWord(str)
	{
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	
	alert(capWord(sentence));
	
	var cities = "Lagos,Accra,Paris,Bamako,Yaounde,Conakry,Kingston,Milan,Barcelona,Chicago,Houston,Norwalk,Boston,Abuja";
                var cityArray = cities.split(",").sort();
                
                for(var x=0; x <cityArray.length; x++)
                    {
                        document.getElementById('result').innerHTML += cityArray[x] + "<br/>";
                    }
                
}