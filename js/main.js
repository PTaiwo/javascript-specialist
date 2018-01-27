/* These functions are for the first lab. */
window.onload = function(){    
    document.getElementById("consoleButton").addEventListener("click", firstResponse);
    
    document.getElementById("browserButton").addEventListener("click", secondResponse);
    
    document.getElementById("alertButton").addEventListener("click", alertResponse);
    
    document.getElementById("colorButton").addEventListener("click", colorResponse);
    
   
};

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

