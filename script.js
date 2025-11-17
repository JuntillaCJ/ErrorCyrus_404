document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function generateRandomNumber() {
    return Math.floor((Math.random() * 100 + 1));
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 to 100";
        feedback.style.color = "red";
        return;
    }
    
    if (guess < targetNumber) {
        feedback.textContent = "Too low. Try again!";
        feedback.style.color = "darkorange";
    } else if (guess > targetNumber) {
        feedback.textContent = "Too high. Try again!";
        feedback.style.color = "darkorange";
    } else {
        feedback.textContent = "Congratulations! You guessed the number!";
        feedback.style.color = "green";
        targetNumber = generateRandomNumber();
    }
    
    document.getElementById("guessInput").value = "";
}

let targetNumber = generateRandomNumber();