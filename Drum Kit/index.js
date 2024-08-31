for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    animateButton(this.innerHTML);
    playSound(this.innerHTML);
  });
}
//pass in the event into the function to determine which key has been pressed to initiate event
document.addEventListener("keydown", function (e) {
  animateButton(e.key);
  playSound(e.key);
});
function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}
function animateButton(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}
