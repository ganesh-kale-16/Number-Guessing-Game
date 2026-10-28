let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');
const attemptsDisplay  = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', function(e){
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessButton.disabled = true;
    }
    else if(userGuess>randomNumber){
        result.textContent = "number is too high! Try again.";
    }
    else{
        result.textContent = "number is too low! Try again.";
    }
});

restartButton.addEventListener('click', function(e){
    randomNumber = Math.floor(Math.random() * 100 + 1);
    attempts = 0;
    guessInput.value= "";
    result.textContent = "";
    attemptsDisplay.textContent = "Attempts:0";
})