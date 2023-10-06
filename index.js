
const choices = ["rock","paper","scissors"]

let playerPoints = 0;
let computerPoints = 0;

function game() {

  for (let i = 0; i < 5; i++) {
    playRound()
    console.log(`Player Points : ${playerPoints}`)
    console.log(`Computer Points : ${computerPoints}`)
    console.log("--------------------------------------------------------")
  }
  if (playerPoints>computerPoints) {
      alert("You Win!")
  }else{
    alert("You Lose!")
  }
}


function playRound() {
  const playerSelected = playerChoice()
  const computerSelected = compouterChoice()
  if (playerSelected===choices[0]&&computerSelected===choices[0]) {
    console.log("No one Win!")
  }
  if (playerSelected===choices[0]&&computerSelected===choices[1]) {
    console.log("You Lose!")
    computerPoints++
  }
  if (playerSelected===choices[0]&&computerSelected===choices[2]) {
    console.log("You Win!")
    playerPoints++
  }

  if (playerSelected===choices[1]&&computerSelected===choices[0]) {
    console.log("You Win!")
    playerPoints++
  }
  if (playerSelected===choices[1]&&computerSelected===choices[1]) {
    console.log("No One Win!")
  }
  if (playerSelected===choices[1]&&computerSelected===choices[2]) {
    console.log("You Lose!")
    computerPoints++
  }

  if (playerSelected===choices[2]&&computerSelected===choices[0]) {
    console.log("You Lose!")
    computerPoints++
  }
  if (playerSelected===choices[2]&&computerSelected===choices[1]) {
    console.log("You win!")
    playerPoints++
  }
  if (playerSelected===choices[2]&&computerSelected===choices[2]) {
    console.log("No One Win!")
  }
  console.log(`Computer Selected : ${computerSelected}`)
  console.log(`You Selected: ${playerSelected}`)
}


function playerChoice() {
  // get input from user
  const choicePlayer = prompt("Type rock or paper or scissors :")
  return choicePlayer
}

function compouterChoice() {
  return choices[Math.floor(Math.random()*choices.length)]
}

game()