const choices = ["rock", "paper", "scissor"];

// empty values

let playerPoints = 0;
let computerPoints = 0;

// inputs for results

const playerResult = document.querySelector("#player-result");
const computerResult = document.querySelector("#computer-result");
const finalResult = document.querySelector(".final-result");


function startgame() {
  let btns = document.querySelectorAll("button");
  btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      playRound(item.id, compouterChoice());
    });
  });
}

function checkWin() {
  playerResult.innerText = playerPoints;
  computerResult.innerText = computerPoints;
  // logic for who wins in 5 rounds
  if (computerPoints === 5) {
    alert("Computer win");
    location.reload();
  } else if (playerPoints === 5) {
    alert("player win");
    location.reload();
  }
}

function playRound(choice1, choice2) {
  if (choice1 === choice2) {
    console.log("tie");
    finalResult.innerText = "Tie!";
    checkWin();
  } else if (
    (choice1 == "rock" && choice2 == "scissor") ||
    (choice1 == "scissor" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    finalResult.innerText = "Player Win This Round";
    playerPoints++;
    checkWin();
  } else {
    finalResult.innerText = "Computer Win This Round";
    computerPoints++;
    checkWin();
  }
}

// computer choice random choices

function compouterChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

startgame();
