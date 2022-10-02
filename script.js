'use strict';

// DOM Strings
const domInputGuess = document.querySelector('.guess');
const domBtn = document.querySelector('.check');
const domMessage = document.querySelector('.message');
const domScore = document.querySelector('.score');
const domHighScore = document.querySelector('.highscore');
const domNumber = document.querySelector('.number');
const domBody = document.querySelector('body');

function initializeProgram() {
  // Generate random number
  const randomNumber = Math.ceil(Math.random() * 20);
  console.log(randomNumber);

  //return score and highscore
  return [20, 0, randomNumber];
}

let [score, highscore, randomNumber] = initializeProgram();

function guessNumber(e) {
  const guessValue = parseInt(domInputGuess.value);

  //Clear input
  domInputGuess.value = '';

  if (guessValue > 20) {
    return alert('You cannot guess a number more than 20. Please try again');
  } else if (isNaN(guessValue)) {
    return alert('Please type in a number');
  }

  if (guessValue === randomNumber) {
    domMessage.textContent = 'You guessed right';

    domNumber.textContent = guessValue;
    domHighScore.textContent = score;
    score = 0;
    domScore.textContent = score;
    domBody.style.backgroundColor = '#60b347';
    domNumber.style.width = '30rem';

    return;
  } else if (guessValue > randomNumber) {
    score--;
    domMessage.textContent = 'Too high ...';
    domScore.textContent = score;
    return;
  } else if (guessValue < randomNumber) {
    score--;
    domMessage.textContent = 'Too low ...';
    domScore.textContent = score;
    return;
  } else {
    domMessage.textContent =
      'Something went wrong ... contact ktasie@gmail.com';
  }
}

domBtn.addEventListener('click', guessNumber);
