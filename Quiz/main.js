const cardElement = document.querySelector("#card");
const questionLabelElement = document.querySelector("#questionLabel");
const questionElement = document.querySelector("#question");
const radioGroupElement = document.querySelector("#radioGroup");

let currentQuestionIndex = 0;
let correctAnswerCount = 0;

buildQuiz();

function buildQuiz() {

  // Get current question object
  const question = questions[currentQuestionIndex];

  questionLabelElement.innerHTML = "Question " + (currentQuestionIndex + 1);
  questionElement.innerHTML = question.text;

  let radioElements = "";
  for (let index = 0; index < question.answers.length ; index++) {
    radioElements += '<label class="radio">'
    radioElements += '<input type="radio" name="answer" value="'+ index +'" /> '
    radioElements += question.answers[index];
    radioElements += '</label><br />';
  }
  radioGroupElement.innerHTML = radioElements;
}

function endQuiz() {
  cardElement.innerHTML = '<div class="is-size-5">End of Questions</div>';
  cardElement.innerHTML += '<p>You get ' + correctAnswerCount + " out of " + questions.length + " correct</p>";
  cardElement.innerHTML += '<div class="button is-warning mt-2" onclick="buildQuiz()">Restart</div>'

  correctAnswerCount = 0;
  currentQuestionIndex = 0;
}

function onClickNext() {
  const radios = document.getElementsByName("answer");
  let selectedAnswer = null;

  for (let index = 0; index < radios.length; index++) {
    if (radios[index].checked) {
      selectedAnswer = radios[index].value;
    }
  }

  if (selectedAnswer == null) {
    return alert("Please select an answer");
  }

  if (selectedAnswer == questions[currentQuestionIndex].correctAnswer) {
    correctAnswerCount++;
  }

  if (currentQuestionIndex >= questions.length - 1) {
    console.log(currentQuestionIndex);
    endQuiz();
    return
  }

  currentQuestionIndex++;
  buildQuiz();
}