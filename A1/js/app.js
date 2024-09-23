// VARIABLES
  // Buttons
let button0 = document.getElementById("button0");

 // Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");

 // Data
let playerRoll = 0;
let aiRoll = 0;


// PROCESS
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  showAiRollResult();
});


// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}


// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}

function showAiRollResult() {
  aiRollText.innerHTML = aiRoll;
}
