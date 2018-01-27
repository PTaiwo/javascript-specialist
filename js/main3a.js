/* These functions are for the switch lab */
window.onload = function()
{    document.getElementById('beverageButton').addEventListener('click', nameBeverage);
};

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

