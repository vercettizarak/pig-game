/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Every DomElements 
var domStrings = {
  btnNew: document.querySelector('.btn-new'),
  p1Score: document.querySelector('#score-0'),
  p1CurScore: document.querySelector('#current-0'),
  p2Score: document.querySelector('#score-1'),
  p2CurScore: document.querySelector('#current-1'),
  dice: document.querySelector('.dice'),
  rollbtn: document.querySelector('.btn-roll')
}

function newGame() {
  // Reseting all values to 0
  domStrings.p1Score.textContent = 0;
  domStrings.p1CurScore.textContent = 0;
  domStrings.p2Score.textContent = 0;
  domStrings.p2CurScore.textContent = 0;

  //Hide the Dice
  domStrings.dice.style.visibility = "hidden"
}

//
function rollDice() {
  //1 generate a random number

  
  //2 show the dice of the dice

  
  
  //3 Put the Number in the current Score



  //4 Add to Player Score 
}



// New Game when Page is loaded 
window.addEventListener('load', newGame)

//New Game Button clicked
domStrings.btnNew.addEventListener('click', newGame)

//ROLL dice Buton clicked
domStrings.rollbtn.addEventListener('click', rollDice)
