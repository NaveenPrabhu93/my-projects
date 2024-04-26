function emi()
{
    var P,R,n,r, answer;

    P= parseInt(document.getElementById("pri").value);
    R= parseInt(document.getElementById("rate").value);
    n= parseInt(document.getElementById("time").value);
    r=6

    answer= P*R*(1+r)**n/(1+r)**n-1;

    document.getElementById('answer').value= answer;
}
function reset()
{
    document.getElementById('pri').value= "";
    document.getElementById('rate').value= "";
    document.getElementById('time').value= "";
    document.getElementById('answer').value= "";
}