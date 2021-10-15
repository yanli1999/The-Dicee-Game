
var randomNumber1 = Math.floor(Math.random()*6)+1;
if(randomNumber1=1){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice1.png");
}
else if(randomNumber1=2){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice2.png");
}
else if(randomNumber1=3){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice3.png");
}
else if(randomNumber1=4){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice4.png");
}
else if(randomNumber1=5){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice5.png");
}
else{
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice6.png");
}


var randomNumber2 = Math.floor(Math.random()*6)+1;
if(randomNumber2=1){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice1.png");
}
else if(randomNumber2=2){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice2.png");
}
else if(randomNumber2=3){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice3.png");
}
else if(randomNumber2=4){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice4.png");
}
else if(randomNumber2=5){
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice5.jpg");
}
else{
  document.getElementsByTagName("img")[0].setAttribute("images/dice6.png","images/dice6.png");
}

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Play 1 wins!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Play 2 wins!🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}
