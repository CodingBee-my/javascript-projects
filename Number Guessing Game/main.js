// Create variable for the number of guess and the answer
let answer = Math.round(Math.random() * 100);
let guessCount = 0;
let guess = 0;

// Create variable for HTML element
let guessCountNumberElement = document.getElementById("guessNumber");
let resultInnerElement = document.getElementById("result");
let guessElement = document.getElementById("guessInput");

// Create a function called guessNumber()
function guessNumber() {
  // Increase the number of guess and display it on the screen
  guessCount++;
  guessCountNumberElement.innerHTML = guessCount;

  // Create a variable to store the guess number
  guess = guessElement.value;

  // Check if the guessed number is same as answer
  // Display message accordingly based on the asnwer
  if (guess == answer) {
    resultInnerElement.innerHTML = "You guessed the right answer!";
  } else if (guess > answer) {
    resultInnerElement.innerHTML = "Try a lower number!";
  } else {
    resultInnerElement.innerHTML = "Try a higher number!"
  }
}