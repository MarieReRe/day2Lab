
//Assignment requirements
//[x] top 10 hobbies/restuarant as ordered list
//[x]work and education into ul
//[]add feedback responses if missed question
//[x]Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//[x]Indicates through an alert if the guess is “too high” or “too low”.
//[x] It should give the user exactly four opportunities to get the correct answer.
//[x] After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
//[x] Add a 7th question that has multiple possible correct answers that are stored in an array.
//[x] Give the user 6 attempts to guess the correct answer.
//[x]The guesses will end once the user guesses a correct answer or they run out of attempts.
//[] Display all the possible correct answers to the user- use loop
//[] Final score at end of quiz 
//[x] Use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stretch Goals
// []Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
//[x]Make the number-guessing question use a random number as its correct answer.



window.addEventListener('load', (event) => {
  //do these two things first
  'use strict';
  console.log('This is working');


  var firstName = prompt(" Well hello there, I'm Marie, what's your name?");
  console.log('Our new best friends name:' + firstName);
  alert('Nice to meet you ' + firstName + ', ' + 'are you ready to become best friends?');

  var lowerCaseName = firstName.toLowerCase();

  if (lowerCaseName === 'marie') {
    alert(firstName + ' ,' + 'welcome back best friend!');
  } else {
    alert('Welcome Back!');
  }

  var bermuda = prompt("Have I ever lived in the Carribean?");
  console.log('Have I ever lived in Carribean: ' + bermuda);
  alert('Bermuda is not in the Carribean, its across from the Carolinas.');

  var ohio = prompt('Am I originally from Ohio?');
  console.log('State of residence:' + ohio);
  alert('I am originally from Ohio');

  var husband = prompt('Am I married?');
  console.log('Married?' + husband);
  alert('I am so married, woo!');

  var prevCareer = prompt('In my past career I was a Chef?');
  console.log('Previous Career answer:' + prevCareer);
  alert('You passed, ' + firstName + ', ' + 'we can now officially be best friends!');


  function getRandomInt() {
    var min = Math.ceil(0);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  var answer = getRandomInt();
  var randNum;
  for (var i = 0; i < 4; i++) {
    randNum = prompt('I am thinking of a number between 1-10, you have 4 guesses to get it right');
    console.log(randNum);
    if (answer == randNum) {
      alert('Congrats you somehow guessed correctly!');
      break;
    } else if (answer > randNum) {
      alert('Guess is too low');
    } else if (answer < randNum) {
      alert('Guess is too high, try again');
    }
  }
  if (answer != randNum) {
    alert('Sorry, you are out of attempts, the correct number is ' + answer);
  }


  var q7Answer = ['pasta', 'sushi', 'cake'];
  var question7 = prompt('What is my favorite foods?');
  var correctA = false;
  for (var i = 0; i < 6; i++) {
    question7 = prompt('What is my favorite foods?');
    console.log(question7);
    for (var j = 0; j < q7Answer.length; j++) {
      if (q7Answer[i] === question7) {
        alert('Congrats you somehow guessed correctly!');
        correctA = true;
        break;
      } else if (q7Answer[i] != question7) {
        alert('Sorry, try again');
      }
      if (correctA) {
        break;
      }
    }
  }
});
