window.onload = function(){
    
    document.getElementById("consoleButton").addEventListener("click", firstResponse);
    
    document.getElementById("browserButton").addEventListener("click", secondResponse);
    
    document.getElementById("alertButton").addEventListener("click", alertResponse);
    
    document.getElementById("colorButton").addEventListener("click", colorResponse);
    
   
}

function firstResponse(e) {
    console.log("Thanks for clicking he console button!");
}

function secondResponse(e) {
    
    document.write("Thanks for clicking the browser button");
}

function alertResponse(e) {
    
    alert("Learning the magic of JavaScript, keep going!!!");
}

function colorResponse(e) {
    
    document.getElementById("colorButton").style.color = "red";
}


window.onload = function()
{
   document.getElementById("addingButton").addEventListener("click", addNumbers); 
    
   document.getElementById("multiplyButton").addEventListener("click", multiplyNumbers); 
    
   document.getElementById("divisionButton").addEventListener("click", divideNumbers); 
}

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


/*function addNumbers(e) {
    
    var answer = "";
    var fn, ln;
    fn = Number(document.getElementById('inputOne').value);
    ln = Number(document.getElementById('inputTwo').value);
    answer = (fn + ln);
    alert(answer);
} */