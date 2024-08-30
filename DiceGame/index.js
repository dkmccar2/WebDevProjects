var randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber2);

var randomImageSource = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
