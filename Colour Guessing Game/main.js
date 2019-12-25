// Create two variables to store the score and the correctCircle
let score = 0;
let correctCircle = 0;

// Call generateColors functions when the game start!
generateColors();

function generateColors() {

  // Assign a random number from 0 - 2 for correct circle
  correctCircle = Math.round(Math.random() * 2);

  // Using a for loop, generate random RGB value for each circle
  for (let index = 0; index < 3; index++) {

    // Generate 3 rgb code 
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    //
    // create a rgb string variable and join the generated
    // value to a string like this RGB(12,245,174)
    //
    let rgb = "RGB(" + red + "," + green + "," + blue + ")";

    // Using CSS selector, change the background colour of each circle
    // to the generated RGB code
    let cssSelector = ".circle:nth-child(" + (index + 1) + ")";
    document.querySelector(cssSelector).style.backgroundColor = rgb;

    // If current index in equal to correctCircle
    // change the HTML colour code to the RGB text
    if (index == correctCircle) {
      document.querySelector(".colour-code").innerHTML = rgb;
    }
  }
}

// onCircleClicked function will be attached to the circles
// the function will take in 1 parameter which is the circle's
// number.
function onCircleClicked(number) {

  //
  // Check if the clicked circle number is
  // equal to the correctCircle
  //
  if (number == correctCircle) {
    // if correct answer, call generateColors function and
    // call addScore function
    generateColors();
    addScore();
  } else {
    // if wrong answer, call resetScore function
    alert("Wrong answer!")
    resetScore();
    generateColors();
  }
}

//
// this function will add 1 to the score and change
// the html score text
//
function addScore() {
  score++;
  document.querySelector("#score").innerHTML = score;
}

// this function will reset the score to 0
function resetScore() {
  score = 0;
  document.querySelector("#score").innerHTML = score;
}