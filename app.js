/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Every DomElements
const domStrings = {
  btnNew: document.querySelector('.btn-new'),
  p1Score: document.querySelector('#score-0'),
  p1CurScore: document.querySelector('#current-0'),
  p2Score: document.querySelector('#score-1'),
  p2CurScore: document.querySelector('#current-1'),
  dice: document.querySelector('.dice'),
  rollbtn: document.querySelector('.btn-roll')
};


// STATE of the aplication
const state = {
  p1: {
    id: 'p1',
    val: 0
  },
  p2: {
    id: 'p2',
    val: 0
  },
  curScore: 0,
  actualPlayer: ''
};


//Funtion to Initiate o Reiniciate the game
function newGame() {
  // Reseting all values to 0
  domStrings.p1Score.textContent = 0;
  domStrings.p1CurScore.textContent = 0;
  domStrings.p2Score.textContent = 0;
  domStrings.p2CurScore.textContent = 0;

  //Hide the Dice
  domStrings.dice.style.visibility = 'hidden';

  //Set the player 1 turn
  actualPlayer = state.p1;
}


//Function to when the player roll the dice
function rollDice() {
  //1 generate a random number
  const dice = Math.round(Math.random() * 5 + 1);  //Math.round(Math.random() * 5 + 1);

  //2 show the dice of the dice
  domStrings.dice.style.visibility = 'visible';
  console.log(dice);
  domStrings.dice.setAttribute('src', `dice-${dice}.png`);

  //3 Put the Number in the current Score
  actualPlayer.id === 'p1'? playerScore = domStrings.p1CurScore : playerScore = domStrings.p2CurScore;

  if (dice !== 1) {
    state.curScore += dice;

    //4 Add to Player Score
    playerScore.textContent = state.curScore;
    
  } else {
    // 5 Reset the player score and state.curent score
    state.curScore = 0;
    playerScore.textContent = 0;

    // Changing player turn
    actualPlayer.id === state.p1.id ? actualPlayer = state.p2 : actualPlayer = state.p1;
  }
}

// New Game when Page is loaded
window.addEventListener('load', newGame);

//New Game Button clicked
domStrings.btnNew.addEventListener('click', newGame);

//ROLL dice Buton clicked
domStrings.rollbtn.addEventListener('click', rollDice);

console.log('wtf is happening')
