//get computer choice
//get players choice
//compare and evaluate computer and players choice
//return the winner


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor']; //3
  const randomNum = Math.floor(Math.random() * choices.length); // 0-2
  return choices[randomNum].toUpperCase();
}

function playersChoice() {
  const choice = prompt('Choose your weapon','Rock');
  return !choice ? 'Canceled' : choice.toUpperCase(); 
}

function playRound(computer,player) {
  let winner;
  if (computer === 'ROCK') {
    if (player === computer) {
      winner = 'DRAW';
    }else if (player === 'PAPER') {
      winner = 'PLAYER WINS';
    }else {
      winner = 'COMPUTER WINS';
    }  
  } else if (computer === 'PAPER') {
    if (player === computer) {
      winner = 'DRAW';
    }else if (player === 'SCISSOR') {
      winner = 'PLAYER WINS';
    }else {
      winner = 'COMPUTER WINS';
    }  
  } else {
    if (player === computer) {
      winner = 'DRAW';
    }else if (player === 'ROCK') {
      winner = 'PLAYER WINS';
    }else {
      winner = 'COMPUTER WINS';
    }  
  }
  console.log(computer);
  console.log(player);
  console.log(winner);
}


playRound(getComputerChoice(),playersChoice());