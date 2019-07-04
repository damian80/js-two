function check() 
{

    let number = document.getElementById("field").value;

    if(number>0)document.getElementById("result").innerHTML="positive";
    else if(number<0)document.getElementById("result").innerHTML="negative";
    else if(number==0)document.getElementById("result").innerHTML="zero";
    else document.getElementById("result").innerHTML="thats not a number";

}