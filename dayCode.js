/*
this program calculates
*/

function calculate(){
// retrieves the date and outputs what day of the week it was 

    var month = document.getElementById("month_input").value.toLowerCase();
    var day = parseInt(document.getElementById("day_input").value);
    var year = parseInt(document.getElementById("year_input").value);
    var number = compute(month, day, year);
    var answer_text = document.getElementById("answer_text");
// allows user to see what day of the week it was based on the formula
    switch (number) {
      case 0:
        answer_text.textContent = "Sunday";
        break;
      case 1:
        answer_text.textContent = "Monday";
        break;
      case 2:
        answer_text.textContent = "Tuesday";
        break;
      case 3:
        answer_text.textContent = "Wednesday";
        break;
      case 4:
        answer_text.textContent = "Thursday";
        break;
      case 5:
        answer_text.textContent = "Friday";
        break;
      case 6:
        answer_text.textContent = "Saturday";
        break;
      default:
        answer_text.textContent = "Error, sorry";
    }
  }

  function calculateMonthCode(month){
    // takes the month and assigns the correct number
    switch (month) {
      case "january":
        return 5;
      case "february":
        return 1;
      case "march":
        return 1;
      case "april":
        return 4;
      case "may":
        return 6;
      case "june":
        return 2;
      case "july":
        return 4;
      case "august":
        return 0;
      case "september":
        return 3;
      case "october":
        return 5;
      case "november":
        return 1;
      case "december":
        return 3;
    }
  }

  function calculateCenturyCode(year){
    // calculates the centruy code based on the year provided
    var century = Math.floor(year / 100);
    switch (century % 4) {
      case 0:
        return 0;
      case 1:
        return 5;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  }

  function calculateYearCode(month, year){
   // calculates the year code and checks for leap years and adjusts accordingly
    var lastNumbers = year % 100;
    var ourAnswer = lastNumbers + 1 + Math.floor(lastNumbers / 4);
    if ((lastNumbers === 0 && year % 400 === 0 && (month === "january" || month === "february")) || (lastNumbers % 4 === 0 && !(lastNumbers === 0 && year % 100 !== 0) && (month === "january" || month === "february"))){
      ourAnswer--;
    }
    return ourAnswer;
  }

  function compute(month, day, year){
    // calculates day, month, year, and century codes at once and returns a corresponding number for each day of the week
    var dayCode = day;
    var monthCode = calculateMonthCode(month);
    var centuryCode = calculateCenturyCode(year);
    var yearCode = calculateYearCode(month, year);
    var total = dayCode + monthCode + centuryCode + yearCode;
    return total % 7;
  }

  function getRandomNumber(b) {
    // gets a random number 1-b inclusive
    return Math.floor(Math.random() * b) + 1;
}

function randomize() {
// creates a random date
    var month;
    var day;
    var year;
    var monthtext;
    var dayOutput;
    var yearOutput; 
    var monthOutput;
//month part
    month = getRandomNumber(12); 
      if (month == 1)
        monthtext = "January";
      else if (month == 2)
        monthtext = "February";
       else if (month == 3)
          monthtext = "March";
      else if (month == 4)
         monthtext = "April";
      else if (month == 5)
           monthtext = "May";
      else if (month == 6)
           monthtext = "June";
      else if (month == 7)
           monthtext = "July";
      else if (month == 8)
           monthtext = "August";
      else if (month == 9)
           monthtext = "September";
      else if (month == 10) 
           monthtext = "October";
      else if (month == 11)
           monthtext = "November";
      else if (month == 12)
           monthtext = "December";
      else
           monthtext = "error";

    monthOutput = document.getElementById("month_input");
    monthOutput.value = monthtext;

// year part
year = 1000 + getRandomNumber(2000);
yearOutput = document.getElementById("year_input");
yearOutput.value = year;

// date part
   if (month == 1 || month == 3 || month == 5 || month == 7 || month == 9|| month == 11)
     day = getRandomNumber(31);
    // next line checks for leap years
    else if ((year / 100 === 0 && year % 400 === 0 && (month == 2)) || ((year / 100 )% 4 === 0 && !(year / 100 === 0 && year % 100 !== 0) && (month == 2)))
     day = getRandomNumber(29);
    else if (month ==2)
     day = getRandomNumber(29);
   else if (month == 4 || month == 6 || month == 8 || month == 10 || month == 12)  
     day = getRandomNumber(30);
    else 
     day = "error";

   dayOutput = document.getElementById("day_input");
   dayOutput.value = day;
}

function checkMonday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Monday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}

function checkTuesday(){
  calculate();
  var trueDay = document.getElementById("answer_text").textContent;
  var answer = document.getElementById("amIright");
  if (trueDay == "Tuesday"){
  answer.textContent = "Correct";
  }
  else 
  answer.textContent = "Incorrect";
  }

function checkWednesday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Wednesday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}

function checkThursday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Thursday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}

function checkFriday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Friday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}

function checkSaturday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Saturday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}

function checkSunday(){
calculate();
var trueDay = document.getElementById("answer_text").textContent;
var answer = document.getElementById("amIright");
if (trueDay == "Sunday"){
answer.textContent = "Correct";
}
else 
answer.textContent = "Incorrect";
}