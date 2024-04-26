
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function cc()
{
    display.value =eval()
}

function reset()
{
    document.getElementById("display").value="";

}

