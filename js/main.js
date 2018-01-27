/* These functions are for the first lab. */
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

/*These functions are for the second lab */
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
/*These functions are for the second lab */
window.onload = function()
{
   alert("Let's play! Think of a rock, paper, or scissors!"); document.getElementById('playButton').addEventListener('click', randomNumber);
}

function randomNumber(e)
{
    var computerAnswer = Math.random();
    
    if (computerAnswer <= 0.33)
        {
            alert("Computer chose rock!");
        } else if (computerAnswer >0.33 && computerAnswer <= 0.66)
        {
            alert("Computer chose paper!");
        } else 
        {
            alert("Computer chose scissors");         
        }
};

/* These functions are for the swith lab */
window.onload = function()
{
    document.getElementById('beverageButton').addEventListener('click', nameBeverage);
}

function nameBeverage(e)
{
    var choice;
    var yourBeverage = prompt("What's your beverage of choice?");
    
    switch(yourBeverage.toLowerCase()) {
        case "beer":
        choice = "Good choices on tap, IPAs are in.";
        break;
        case "whiskey":
        choice = "Bourbon, Scotch or Single Malt?";
        break;
        case "wine":
        choice = "Red or White? California or Foreign?";
        break;
        case "gin":
        choice = "Lime or Tonic?";
        break;
        case "vodka":
        choice = "Cranberry or Tonic?";
        break;
        case "cognac":
        choice = "VS, VSOP or XO, neat I assume?";
        break;
        default:
        choice = "You need to step up your drink game!!!";
    }
    document.getElementById('drinks').innerHTML = "<h3>" + choice + "</h3>";
}

