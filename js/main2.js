/*These functions are for the second lab */
window.onload = function()
{
   document.getElementById("addingButton").addEventListener("click", addNumbers); 
    
   document.getElementById("multiplyButton").addEventListener("click", multiplyNumbers); 
    
   document.getElementById("divisionButton").addEventListener("click", divideNumbers); 
};

function addNumbers(e) {
    
var answer = "";
    
answer += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value
    
    alert(answer);
}

function multiplyNumbers(e) {
    
var answer = "";
    
answer += + document.getElementById('inputThree').value * document.getElementById('inputFour').value
    
    alert(answer);
}

function divideNumbers(e) {
    
var answer = "";
    
answer += + document.getElementById('inputFive').value / document.getElementById('inputSix').value
    
    alert(answer);
}
