function bmi()
{
var weight, height, bmi;

weight = parseInt(document.getElementById("weight").value);
height = parseInt(document.getElementById("height").value);

bmi = weight*weight/height;
document.getElementById("bmi").value = bmi;   
}
function reset()
{
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("bmi").value = "";
}