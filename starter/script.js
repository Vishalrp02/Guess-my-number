'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //  document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  }
  //Whem player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Corect Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
