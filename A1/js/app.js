// VARIABLES
  // Buttons
let button0 = document.getElementById("button0");

 // Texts
let playerRollText = document.getElementById("playerRollText");

 // Data
let playerRoll = 0;


// PROCESS
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
});


// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}


// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
