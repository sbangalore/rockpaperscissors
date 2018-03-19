function playRound(playerChoice, computerChoice) {
  if (playerChoice=='Rock') {
    if (computerChoice=='Paper') {
      numLosses += 1;
      document.getElementById('gameResult').innerHTML='Your opponent won.';
    }
    else if (computerChoice=='Scissors') {
      numWins += 1;
      document.getElementById('gameResult').innerHTML='You won.';
    }
  }

  else if (playerChoice=='Paper') {
    if (computerChoice=='Scissors') {
      numLosses += 1;
      document.getElementById('gameResult').innerHTML='Your opponent won.';
    }
    else if (computerChoice=='Rock') {
      numWins += 1;
      document.getElementById('gameResult').innerHTML='You won.';
    }
  }

  else if (playerChoice=='Scissors') {
    if (computerChoice=='Rock') {
      numLosses += 1;
      document.getElementById('gameResult').innerHTML='Your opponent won.';
    }
    else if (computerChoice=='Paper') {
      numWins += 1;
      document.getElementById('gameResult').innerHTML='You won.';
    }
  }
  else {
    document.getElementById('gameResult').innerHTML="It's a tie. Play again";
  }
}

function whoWon(numWins, numLosses){
  if numWins>2 {
      document.getElementById('finalResult')='You won.';
  }
  else if numLosses>2 {
      document.getElementById('finalResult')='Your opponent won.';
  }
}

function restart() {

}

function computerChoice() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random()*3)];
}

function game() {
  var numWins = 0;
  var numLosses = 0;
  console.log('start');
  var computerChoice = computerChoice();
  console.log(computerChoice);
  var playerChoice = prompt();
  console.log(playRound(playerChoice, computerChoice));

}
