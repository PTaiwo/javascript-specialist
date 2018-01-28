/* Function for Lab 5 */
window.onload = function()
{
    document.getElementById('hoursButton').addEventListener('click', runCheckHours);
}

function runCheckHours()
{
    var hoursSlept = document.getElementById('hoursInput').value;
    
    checkHours(hoursSlept);
}

function checkHours(hoursSlept)
{
    if (hoursSlept >= 8)
        {
            return alert("You're getting too much sleep");
        } else {
            return alert("Get some more sleep");
        }
}