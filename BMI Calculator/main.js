// Create weight and height variable, assigned them with number 0
let weight = 0;
let height = 0;

// Get the empty div element with id="result"
let result = document.querySelector("#result");

//
// Create a function call calculateBMI
// When the calculate button in HTML is clicked
// it should call this function
//
function calculateBMI() {

  // Get the height and weight and store them in variables
  weight = document.querySelector("#weightInput").value;
  height = document.querySelector("#heightInput").value;

  //
  // Check if weight or height is empty, if so display a message ask user to input the value
  // You can improve the message by checking if the value input is logical
  //
  // For example if someone enters a height of more than 250cm, you can display a
  // message "Are you sure you are that tall ?!"
  //
  if (weight == "") {
    result.innerHTML = "Please put in your weight!"
    return
  }

  if (height == "") {
    result.innerHTML = "Please put in your height!"
    return
  } else if (height > 200) {
    result.innerHTML = "Are you sure you are that tall ?!"
    return
  }

  //
  // Calculate the BMI
  // The formula for BMI = weight / height^2
  // Where weight in kg and height in meter
  // Finally round your BMI, you can google search what JavaScript 
  // function you should use to do round a number
  //
  let heightInMeter = height/100;
  let BMI = weight / (heightInMeter^2);
  BMI = BMI.toFixed(2)

  //
  // Based on the calculated BMI, display different message
  // BMI < 18.5 is underweight
  // BMI 18.5 - 24.9 is normal
  // BMI 25 - 29.9 is overweight
  // BMI > 30 is obesity
  //
  let message = "Your BMI is " + BMI + ". "
  if (BMI < 18.5) {
    message += "You should eat more!"
  } else if (BMI > 18.5 && BMI < 25) {
    message += "Keep up with your healthy lifestyle!"
  } else if (BMI > 25 && BMI < 30) {
    message += "You should exercise more!"
  } else {
    message += "You are obese! Obesity will cause serious health issue."
  }

  result.innerHTML = message;
}