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
  btnRoll: document.querySelector('.btn-roll'),
  btnHold: document.querySelector('.btn-hold'),
  p1Name: document.querySelector('#name-0'),
  p2Name: document.querySelector('#name-1'),
  p1Panel: document.querySelector('.player-0-panel'),
  p2Panel: document.querySelector('.player-1-panel')
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
  maxScore: 100,
  isGamePlaying : false
};


/*************** 
    DRY FUNCTIONS
*/
function changePlayer() {
  state.curScore = 0;
  playerCurScore.textContent = 0;

  //Changing the style of the actual player
  domStrings.p1Panel.classList.toggle('active')
  domStrings.p2Panel.classList.toggle('active')

  // Changing player turn
  actualPlayer.id === state.p1.id ? actualPlayer = state.p2 : actualPlayer = state.p1;
}


/************************
    THE CALLBACK FUNCTION
*/

//Funtion to Initiate o Reiniciate the game
const  newGame = function() {
  // Reseting all values to 0
  domStrings.p1Score.textContent = 0;
  domStrings.p1CurScore.textContent = 0;
  domStrings.p2Score.textContent = 0;
  domStrings.p2CurScore.textContent = 0;
  state.curScore = 0
  state.p1.val = 0
  state.p2.val = 0


  // Changing the player name 
  domStrings.p1Name.textContent = 'PLAYER 1';  
  domStrings.p2Name.textContent = 'PLAYER 2';  

  // Removing winner class
  domStrings.p2Panel.classList.remove('winner')
  domStrings.p1Panel.classList.remove('winner')

  domStrings.p1Panel.classList.remove('active')
  domStrings.p2Panel.classList.remove('active')
  
  //Puttin style in player 1
  domStrings.p1Panel.classList.add('active')

  //Hide the Dice
  domStrings.dice.style.visibility = 'hidden';

  //Set the player 1 turn
  actualPlayer = state.p1;

  // Changing isGamePlaying to true
  state.isGamePlaying = true;
}


//Function to when the player roll the dice
function rollDice() {

  if (state.isGamePlaying) {
    //1 generate a random number
    const dice = Math.round(Math.random() * 5 + 1);  //Math.round(Math.random() * 5 + 1);
  
    //2 show the dice of the dice
    domStrings.dice.style.visibility = 'visible';
    console.log(dice);
    domStrings.dice.setAttribute('src', `dice-${dice}.png`);
  
    //3 Put the Number in the current Score
    actualPlayer.id === 'p1'? playerCurScore = domStrings.p1CurScore : playerCurScore = domStrings.p2CurScore;
  
    if (dice !== 1) {
      state.curScore += dice;
  
      //4 Add to Player Score
      playerCurScore.textContent = state.curScore;
      
    } else {
      // 5 Reset the player 
      changePlayer()
      alert('You lost the run, other player turn')
    }
  }
}

function holdPoints() { 

  if (state.isGamePlaying) {
    // 1 Check who turn is
    actualPlayer.id === 'p1'? playerScore = domStrings.p1Score : playerScore = domStrings.p2Score;
  
    // 2 Moving the points from the current score to total score
    actualPlayer.val += state.curScore;
  
    // 3 display the score
    playerScore.textContent = actualPlayer.val;
  
    // 4 Check if score === max score 
    if (actualPlayer.val >= state.maxScore){
      //actualPlayer.id === 'p1'? alert('Player 1 is the winner') : alert('Player 2 is the winner');
      
      //Hide the Dice
      domStrings.dice.style.visibility = 'hidden';
      
      //Adding style to the winner 
      if (actualPlayer.id === 'p1') {
        domStrings.p1Name.textContent = 'WINNER';
        domStrings.p1Panel.classList.add('winner')


      } else if(actualPlayer.id ==='p2') {
        domStrings.p2Name.textContent = 'WINNER';
        domStrings.p2Panel.classList.add('winner')
      }
      
      //Changing the isGamePlaying to false
      state.isGamePlaying = false

    } else {
      // 5 Change the player
      changePlayer()
    }
    console.log(state)
  }
}


// New Game when Page is loaded
window.addEventListener('load', newGame);

//New Game Button clicked
domStrings.btnNew.addEventListener('click', newGame);

//ROLL DICE Buton clicked
domStrings.btnRoll.addEventListener('click', rollDice);

//HOLD button
domStrings.btnHold.addEventListener('click', holdPoints)