function add()
{
var numberone, numbertwo, answer;

numberone = parseInt(document.getElementById("numberone").value);
numbertwo = parseInt(document.getElementById("numbertwo").value);

answer = numberone + numbertwo;
document.getElementById("answer").value = answer;
}


function sub()
{
var numberone, numbertwo, answer;

numberone = parseInt(document.getElementById("numberone").value);
numbertwo = parseInt(document.getElementById("numbertwo").value);

answer = numberone - numbertwo;
document.getElementById("answer").value = answer;
}
