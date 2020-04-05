// Create variables for calculations
let distance, speed, time;
let force, mass, acceleration;
let hour, minute, second;

// This function will get all the required input value from HTML for speed calculation
function getSpeedCalculationValue() {
  distance = document.querySelector("#distance").value;
  speed = document.querySelector("#speed").value;
  time = document.querySelector("#time").value;
}

// This function will get all the required input value from HTML for force calculation
function getForceCalculationValue() {
  force = document.querySelector("#force").value;
  mass = document.querySelector("#mass").value;
  acceleration = document.querySelector("#acceleration").value;
}

// This function will get all the required input value from HTML for force calculation
function getTimeConversionValue() {
  hour = document.querySelector("#hour").value;
  minute = document.querySelector("#minute").value;
  second = document.querySelector("#second").value;
}

// This function will run when the calculate speed button is clicked
function onCalculateSpeed() {

  // This function will get all the value when calculate button was clicked
  getSpeedCalculationValue();

  // First check if input value contains 2 input
  // If the input is empty the variable will contain empty string ""
  const onlyDistanceEmpty = distance == "" && speed != "" && time != "";
  const onlySpeedEmpty = speed == "" && distance != "" && time != "";
  const onlyTimeEmpty = time == "" && speed != "" && distance != "";

  // Use a if..if else to check for each condition
  if (onlyDistanceEmpty) {
    // Set the value of the input field to calculated answer
    document.querySelector("#distance").value = speed * time;
  } else if (onlySpeedEmpty) {
    document.querySelector("#speed").value = distance / time ;
  } else if (onlyTimeEmpty) {
    document.querySelector("#time").value = distance / speed;
  } else {
    // If none of the condition fulfill, prompt an alert and ask user to
    // fill in exactly 2 value for calculation
    alert("Please make sure you fill in exactly 2 value for calculation")
  }
}

// This function will run when the calculate force button is clicked
function onCalculateForce() {

  // This function will get all the value when calculate button was clicked
  getForceCalculationValue();

  // First check if input value contains 2 input
  // If the input is empty the variable will contain empty string ""
  const onlyForceEmpty = force == "" && mass != "" && acceleration != "";
  const onlyMassEmpty = mass == "" && force != "" && acceleration != "";
  const onlyAccelerationEmpty = acceleration == "" && force != "" && mass != "";

  // Use a if..if else to check for each condition
  if (onlyForceEmpty) {
    // Set the value of the input field to calculated answer
    document.querySelector("#force").value = mass * acceleration;
  } else if (onlyMassEmpty) {
    document.querySelector("#mass").value = force / acceleration ;
  } else if (onlyAccelerationEmpty) {
    document.querySelector("#acceleration").value = force / mass;
  } else {
    // If none of the condition fulfill, prompt an alert and ask user to
    // fill in exactly 2 value for calculation
    alert("Please make sure you fill in exactly 2 value for calculation")
  }
}

// This function will run when the convert time button is clicked
function onConvertTime() {

  // This function will get all the value when calculate button was clicked
  getTimeConversionValue();

  // First check if input value contains 2 input
  // If the input is empty the variable will contain empty string ""
  const onlyHour = hour != "" && minute == "" && second == "";
  const onlyMinute = minute != "" && hour == "" && second == "";
  const onlySecond = second != "" && hour == "" && minute == "";

  // Use a if..if else to check for each condition
  if (onlyHour) {
    // Set the value of the input field to calculated answer
    document.querySelector("#minute").value = hour * 60;
    document.querySelector("#second").value = hour * 60 * 60;
  } else if (onlyMinute) {
    document.querySelector("#hour").value = minute / 60;
    document.querySelector("#second").value = minute * 60;
  } else if (onlySecond) {
    document.querySelector("#hour").value = second / 60 / 60;
    document.querySelector("#minute").value = second / 60;
  } else {
    // If none of the condition fulfill, prompt an alert and ask user to
    // fill in exactly 2 value for calculation
    alert("Please make sure you fill in exactly 1 value for calculation")
  }
}