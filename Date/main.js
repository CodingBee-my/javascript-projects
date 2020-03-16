// Get elements to display today's date & time
const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");

const daysFromDateInputElement = document.querySelector("#daysFromDate");
const dateFromDaysInputElement = document.querySelector("#dateFromDays");
const weeksFromDateInputElement = document.querySelector("#weeksFromDate");

const resultElement = document.querySelector("#result");

updateDateTime();

window.setInterval(updateDateTime, 1000);

function updateDateTime() {
  let now = moment() ;
  date = moment().format("DD MMM YYYY");
  time = moment().format("h:mm:ss A");
  dateElement.innerHTML = date;
  timeElement.innerHTML = time;
}

function getDaysFromDate() {
  let selectedDate = daysFromDateInputElement.value;
  let selectedDateMoment = moment(selectedDate);
  let today = moment();
  let difference = selectedDateMoment.diff(today, 'days');
  resultElement.innerHTML = selectedDateMoment.format("DD/MM/YY") + " is " + difference  + " days from today.";
}

function getDateFromToday() {
  let days = dateFromDaysInputElement.value;
  let today = moment();
  let dateMoment = today.add(days, "days");
  resultElement.innerHTML = days + " from today is " + dateMoment.format("DD/MM/YYYY");
}

function getWeeksFromDate() {
  let selectedDate = weeksFromDateInputElement.value;
  let selectedDateMoment = moment(selectedDate);
  let today = moment();
  let difference = selectedDateMoment.diff(today, 'weeks');
  resultElement.innerHTML = selectedDateMoment.format("DD/MM/YY") + " is " + difference  + " weeks from today.";
}