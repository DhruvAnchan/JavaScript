var randomNumber1 = Math.round(Math.random())*5+1;
var randomNumber2 = Math.round(Math.random())*5+1;
var str1 = "images/dice"+randomNumber1+".png";
var str2 = "images/dice"+randomNumber2+".png";

const image1 = document.getElementsByClassName("img1")[0];
const image2 = document.getElementsByClassName("img2")[0];
const ref = document.querySelector("h1");

image1.setAttribute("src",str1);
image2.setAttribute("src",str2);

if(randomNumber1>randomNumber2){
    ref.innerHTML = "🚩Player 1 wins";
}
else if(randomNumber1===randomNumber2){
    ref.innerHTML = "👔Tie👔";
}
else{
    ref.innerHTML = "Player 2 wins🚩";
}