var num1 = Math.ceil(Math.random()*6);
var num2 = Math.ceil(Math.random()*6);
if(num1==1){
    document.getElementById("pl1").src="./assets/Dice-1.svg";
}
if(num2==1){
    document.getElementById("pl2").src="./assets/Dice-1.svg";
}
if(num1==2){
    document.getElementById("pl1").src="./assets/Dice-2.svg";
}
if(num2==2){
    document.getElementById("pl2").src="./assets/Dice-2.svg";
}
if(num1==3){
    document.getElementById("pl1").src="./assets/Dice-3.svg";
}
if(num2==3){
    document.getElementById("pl2").src="./assets/Dice-3.svg";
}
if(num1==4){
    document.getElementById("pl1").src="./assets/Dice-4.svg";
}
if(num2==4){
    document.getElementById("pl2").src="./assets/Dice-4.svg";
}
if(num1==5){
    document.getElementById("pl1").src="./assets/Dice-5.svg";
}
if(num2==5){
    document.getElementById("pl2").src="./assets/Dice-5.svg";
}
if(num1==6){
    document.getElementById("pl1").src="./assets/Dice-6.svg";
}
if(num2==6){
    document.getElementById("pl2").src="./assets/Dice-6.svg";
}

if(num1>num2){
    document.getElementById("heading").innerHTML="<em>Player 1 Won</em>";
    document.getElementById("heading").style.color="green";
    document.getElementsByClassName("vic")[0].src="./assets/trophy.png";
    document.getElementsByClassName("vic")[1].src="./assets/trophy.png";
}
else if(num1<num2){
    document.getElementById("heading").innerHTML="<em>Player 2 Won</em>";
    document.getElementById("heading").style.color="green";
    document.getElementsByClassName("vic")[0].setAttribute("src","./assets/trophy.png");
    document.getElementsByClassName("vic")[1].src="./assets/trophy.png";
}
else{
    document.getElementById("heading").innerHTML="<b>Draw Match</b>";
    document.getElementById("heading").style.color="pink";
}