/* Functions for Lab 8 */
window.onload = function()
{
	var arr =[2, 3, 5, 7, 3, 2, 3, 1, 3];
	var mostFrequent = 3;
	var notFrequent = 0;
	var item;
	
	for (var i = 0; i < arr.length; i++) 
	{
        for (var j = i; j < arr.length; j++) 
        {
         if (arr[i] == arr[j])
            notFrequent++;
         if (mostFrequent < notFrequent) 
           {
             mostFrequent = notFrequent;
             item = arr[i];
           }
         }
          notFrequent = 0;
   }
   
   alert(item + " appears " + mostFrequent + " times");
}