// Create variables to hold the HTML element of number input and fact display
const factTextElement = document.querySelector("#fact");
const numberInputElement = document.querySelector("#numberInput");

function onGetFactClicked() {
  let number = numberInputElement.value;

  //
  // Check if number is empty, if so display
  // a message asking user to put in any number
  //
  if (number == "") {
    displayFact("Please put in any number!");
    return
  }

  // Call getFact function with the input parameter
  getFact(number);
}

//
//  Declare a getFact function that takes a number
//  as parameter
//
function getFact(number) {
  fetch("http://numbersapi.com/" + number)
    .then(response => {
      return response.text();
    })
    .then(fact => {
      displayFact(fact);
    })
}

//
//  Declare a displayFact function that takes a string
//  as parameter and display the string on page
//
function displayFact(fact) {
  factTextElement.innerHTML = fact;
}