function ci()
{
    var num1, num2, num3, num4, answer;
    
    num1= parseInt(document.getElementById("principle").value);
    num2= parseInt(document.getElementById("rate").value);
    num3= parseInt(document.getElementById("time").value);
    
    

    answer= num1+(1+num2/100)*num3**num3;

    document.getElementById("interest").value = answer;
}