// VARIABLES
  // Buttons
let button0 = document.getElementById("button0");

 // Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let result = document.getElementById("result");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");
let evaluation = document.getElementById("evaluation");

 // Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;


// PROCESS
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  evaluateResult();
  showPlayerRollResult();
  showAiRollResult();
  showPlayerScore();
  showAiScore();
  showEvaluation();
});


// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = (Math.floor(Math.random() * 6) + 1);
}
function getRandomNumberOneToSixForAi() {
  aiRoll = (Math.floor(Math.random() * 6) + 1);
}
function evaluateResult() {
  if (playerRoll > aiRoll) {
    result.innerHTML = "Player wins!";
    playerScore++;
  }
  else if (aiRoll > playerRoll) {
    result.innerHTML = "Ai wins!";
    aiScore++;
  }
  else {
    result.innerHTML = "It's a draw!";
    drawScore++;
  }
}



// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = "Player result: " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerHTML = "Ai Result: " + aiRoll;
}
function showPlayerScore() {
  playerScoreText.innerHTML = "Player Score: " + playerScore;
}
function showAiScore() {
  aiScoreText.innerHTML = "Ai Score: " + aiScore;
}
function showEvaluation() {
  evaluation.innerHTML = "Wins: " + playerScore + " " + "|| Losses: " + aiScore + " " + "|| Draws: " + drawScore;
}
