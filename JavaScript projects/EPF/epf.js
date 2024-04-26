function epf()
{

    var num1, num2, num3, answer1, answer2, answer3;

    num1= parseInt(document.getElementById("ec").value);
    num2= 13.67;
    num3= 8.33;

    answer1= num1*num2/100;
    answer2= num1*num3/100;
    answer3=num1-answer1-answer2;

    document.getElementById("aepf").innerHTML=answer1;
    document.getElementById("aeps").innerHTML=answer2;
    document.getElementById("epf").value=answer3;


}

function reset()
{
    document.getElementById("ec").value="";
    document.getElementById("aepf").innerHTML="";
    document.getElementById("aeps").innerHTML="";
    document.getElementById("epf").value="";
}