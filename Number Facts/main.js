// Create 
const factTextElement = document.querySelector("#fact");
const numberInputElement = document.querySelector("#numberInput");

function onGetFactClicked() {
  let number = numberInputElement.value;

  // Check if number is empty
  if (number == "") {
    factTextElement.innerHTML = "Please put in any number!";
    return
  }

  getFact(number);
}

function getFact(number) {
  fetch("http://numbersapi.com/" + number)
    .then(response => {
      return response.text();
    })
    .then(fact => {
      displayFact(fact);
    })
}

function displayFact(fact) {
  factTextElement.innerHTML = fact;
}