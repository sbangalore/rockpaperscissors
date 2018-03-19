var numWins = 0;
var numLosses = 0;

function playRound(playerChoice, computerChoice) {
  document.getElementById('choice').innerHTML='You chose ' + playerChoice.toLowerCase() + '.';
  document.getElementById('computerChoice').innerHTML='Your opponent chose ' + computerChoice.toLowerCase() + '.';
  if (playerChoice=='Rock') {
    if (computerChoice=='Paper') {
      numLosses += 1;
      document.getElementById('gameResult').innerHTML='Your opponent won.';
    }
    else if (computerChoice=='Scissors') {
      numWins += 1;
      document.getElementById('gameResult').innerHTML='You won.';
    }
    else {
      document.getElementById('gameResult').innerHTML="It's a tie. Play again.";
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
    else {
      document.getElementById('gameResult').innerHTML="It's a tie. Play again.";
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
    else {
      document.getElementById('gameResult').innerHTML="It's a tie. Play again.";
    }
  }
  setScores();
  whoWon();
}

function setScores() {
  document.getElementById('numWins').innerHTML=numWins;
  document.getElementById('numLosses').innerHTML=numLosses;
}

function whoWon(){
  if (numWins>2) {
      document.getElementById('finalResult').innerHTML='You won.';
  }
  else if (numLosses>2) {
      document.getElementById('finalResult').innerHTML='Your opponent won.';
  }
}

function restart() {
  numWins = 0;
  numLosses = 0;
  setScores();
  document.getElementById('finalResult').innerHTML='';
  document.getElementById('choice').innerHTML='';
  document.getElementById('computerChoice').innerHTML='';
  document.getElementById('gameResult').innerHTML='';
}

function computerChoice() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random()*3)];
}

function game() {
  console.log('start');
  var computerChoice = computerChoice();
  console.log(computerChoice);
  var playerChoice = prompt();
  console.log(playRound(playerChoice, computerChoice));
}
