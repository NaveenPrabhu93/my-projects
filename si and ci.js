function simpleinterest()
{
var principle, rate, time, interest;

principle= parseInt(document.getElementById("principle").value);
rate= parseInt(document.getElementById("rate").value);
time= parseInt(document.getElementById("time").value);

interest = principle + rate + time;
document.getElementById("interest").value = interest;
}
function rest()
{
    document.getElementById("interest").value ="";  
    document.getElementById("principle").value =""; 
    document.getElementById("rate").value =""; 
    document.getElementById("time").value =""; 
}
function ci()
{
    var num1, num2, num3, num4, answer;
    
    num1= parseInt(document.getElementById("principleci").value);
    num2= parseInt(document.getElementById("rateci").value);
    num3= parseInt(document.getElementById("timeci").value);
    num4= parseInt(document.getElementById("monthci").value);
    

    answer= num1+(1+num2/100)*num3**num3;

    document.getElementById("interestci").value = answer;
}
function reset()
{
    document.getElementById("interestci").value ="";  
    document.getElementById("principleci").value =""; 
    document.getElementById("rateci").value =""; 
    document.getElementById("timeci").value =""; 
    (document.getElementById("monthci").value= "");
    
}


