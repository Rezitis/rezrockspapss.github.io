let playerScore = 0;
let aiScore = 0;

// Function to initialize the game
function initializeGame() {
    // Hide the game section
    document.querySelector(".game").style.display = "none";

    // Event listener for the "Start" button
    document.getElementById("start").addEventListener("click", function() {
        // Hide the intro section
        document.querySelector(".intro").style.display = "none";
        // Show the game section
        document.querySelector(".game").style.display = "block";
    });

    // Event listeners for user choice buttons
    document.getElementById("rock").addEventListener("click", function() {
        playGame("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        playGame("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        playGame("scissors");
    });
}

// Function to handle the user's choice and play the game
function playGame(userChoice) {
    const aiChoice = getAIChoice();
    const result = determineWinner(userChoice, aiChoice);
    updateScore(result);
    displayResult(userChoice, aiChoice, result);
    playSound("sounds/whoosh.mp3");
}

// Function to get the AI's choice
function getAIChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && aiChoice === "scissors") ||
        (userChoice === "paper" && aiChoice === "rock") ||
        (userChoice === "scissors" && aiChoice === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        aiScore++;
        return "AI wins!";
    }
}

// Function to update the score
function updateScore(result) {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("aiScore").innerText = aiScore;
}

// Function to display the game result with animation
function displayResult(userChoice, aiChoice, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `You chose ${userChoice}, the AI chose ${aiChoice}. ${result}`;
    resultElement.style.animation = "fadeIn 1s";

    // Reset animation after 1.5 seconds
    setTimeout(function() {
        resultElement.style.animation = "";
    }, 1500);
}

// Function to play sound effects
function playSound(soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
}

// Call the initializeGame function when the DOM is ready
document.addEventListener("DOMContentLoaded", initializeGame);
