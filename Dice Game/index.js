var num = Math.floor(Math.random()*6)+1;

var but = document.querySelectorAll("img")[0];
var but2 = document.querySelectorAll("img")[1];
var imgsrc = "./images/dice"+num+".png"; 
but.setAttribute("src",imgsrc);

var num1 = Math.floor(Math.random()*6)+1;
var imgsrc1 = "./images/dice"+num1+".png"; 
but2.setAttribute("src",imgsrc1);

var hh =document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;

if(num>num1)
{
    hh.innerHTML="Player 1 Wins!!";
}else if(num<num1){
    hh.innerHTML="Player 2 Wins!!";
}
else{
    hh.innerHTML="IT'S A DRAW!!";
}