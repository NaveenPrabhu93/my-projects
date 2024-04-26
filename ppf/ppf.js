function ppf()
{
    var principle, rate, time, F;
    
    
    principle= parseFloat(document.getElementById("principle").value);
    rate= parseFloat(document.getElementById("rate").value);
    time= parseFloat(document.getElementById("time").value);

    F = principle*(((1 + rate)** time)- 1)/rate;

    document.getElementById("interest").value = F;
}
function rest()
{
    principle= parseFloat(document.getElementById("principle").value = "");
    rate= parseFloat(document.getElementById("rate").value = "");
    time= parseFloat(document.getElementById("time").value ="");
    document.getElementById("interest").value = "";
}