
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const EventHandler = function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    const displayGuessingMessage = function(message){
        document.querySelector('.guess-message').textContent = message;
    }
// NO INPUT
    if (!guessingNumber) {
        displayGuessingMessage('Введите число!');
// PLAYER WON
    } else if (guessingNumber === secretNumber) {
        displayGuessingMessage('Правильно!')
        document.querySelector('.question').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').style.width = '50rem'
// BEST SCORE
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
// TOO LOW AND HIGH
    } else if (guessingNumber !== secretNumber) {
        if(score > 1) {
            displayGuessingMessage(guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!')
            score--;
            document.querySelector('.score').textContent = score;
// GAME OVER
        }else{
            displayGuessingMessage('Игра окончена!')
            document.querySelector('.score').textContent = 0
    }
    }}
document.querySelector('.check').addEventListener('click', EventHandler)

// AGAIN
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number-input').value = ''
    score = 20
    document.querySelector('.score').textContent = score
    displayGuessingMessage('Начни угадывать!')
    document.querySelector('.question').textContent = '???'
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.question').style.width = '25rem'
    })

