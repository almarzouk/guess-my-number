"use strict";
// Difinde random number from 1-20 by using math random and I use math.trunc to remove decimal number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// define message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// select check btn
const check = document.querySelector(".check");
// select the score value
let score = 20;
// High Score
let highScore = 0;
// event for click on check
check.addEventListener("click", function () {
  // select guess
  const guess = Number(document.querySelector(".guess").value);
  // the condition
  if (!guess) {
    displayMessage("There is no Number !");
  } else if (guess == secretNumber) {
    displayMessage("Currect Number !");
    // assign the number value to the secret number
    document.querySelector(".number").textContent = secretNumber;
    // vhange the body color
    document.body.style.backgroundColor = "#1CA625";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You Lost the game!");
    document.querySelector(".score").textContent = 0;
    document.body.style.backgroundColor = "#D90416";
  }
});
// Implement again btn
const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  const guess = document.querySelector(".guess");
  guess.value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
});
