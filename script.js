let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
  }

  if (score > 1) {
    if (!guess) {
      // document.querySelector(".message").textContent = "⛔Not Number";
      displayMessage("⛔Not Number")
    } else if (guess == secretNumber) {
      // document.querySelector(".message").textContent = "🎉correct Number";
      displayMessage('🎉correct Number')
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore
      }
    } else if (guess > secretNumber) {
      // document.querySelector(".message").textContent = "📈to high";
      displayMessage('📈to high')
      document.querySelector("body").style.backgroundColor = "#222";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      // document.querySelector(".message").textContent = "📉 to low";
      displayMessage('📉 to low')
      document.querySelector("body").style.backgroundColor = "#222";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    // document.querySelector(".message").textContent = "💥 You lost the game!";
    displayMessage('💥 You lost the game!')
    document.querySelector(".score").textContent = 0;
  }
});


// agian bottom 
document.querySelector('.again').addEventListener('click', function () {
 score = 20;
 secretNumber = Math.trunc(Math.random() * 20) + 1;

  
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = '?'
  document.querySelector('.guess').value =' '
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector('.number').style.width='15rem'
})