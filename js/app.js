
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
//[x] Final score at end of quiz 
//[x] Use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stretch Goals
// []Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
//[x]Make the number-guessing question use a random number as its correct answer.

// this is a chenage that we can remove

window.addEventListener('load', (event) => {
  //do these two things first
  'use strict';
  console.log('This is working');

  var pointsEarned = 0;

  function beginQuiz() {
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
  }


  var firstName = prompt(" Well hello there, I'm Marie, what's your name?");
  console.log('Our new best friends name:' + firstName);
  alert('Nice to meet you ' + firstName + ', ' + 'are you ready to become best friends?');

  function questionOne() {
    var lowerCaseName = firstName.toLowerCase();
    if (lowerCaseName === 'marie') {
      alert(firstName + ' ,' + 'welcome back best friend!');
    } else {
      alert('Welcome Back!');
    }
  }

  function questionTwo() {
    var bermuda = prompt("Have I ever lived in the Carribean?");
    console.log('Have I ever lived in Carribean: ' + bermuda);
    alert('Bermuda is not in the Carribean, its across from the Carolinas.');
  }

  function questionThree() {
    var ohio = prompt('Am I originally from Ohio?');
    console.log('State of residence:' + ohio);
    alert('I am originally from Ohio');
  }

  function questionFour() {
    var husband = prompt('Am I married?');
    console.log('Married?' + husband);
    alert('I am so married, woo!');
  }

  function questionFive() {
    var prevCareer = prompt('In my past career I was a Chef?');
    console.log('Previous Career answer:' + prevCareer);
    alert('You passed, ' + firstName + ', ' + 'we can now officially be best friends!');
  }

  function questionSix() {
    var min = Math.ceil(1);
    var max = Math.floor(10);
    var randomInt = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

    var randNum;
    for (var i = 0; i < 4; i++) {
      randNum = prompt('I am thinking of a number between 1-10, you have 4 guesses to get it right');
      console.log(randNum);
      if (randomInt == randNum) {
        alert('Congrats you somehow guessed correctly!');
        pointsEarned++;
        console.log(pointsEarned);
        break;
      } else if (randomInt > randNum) {
        alert('Guess is too low');
      } else if (randomInt < randNum) {
        alert('Guess is too high, try again');
      }
    }
    if (randomInt != randNum) {
      alert('Sorry, you are out of attempts, the correct number is ' + randomInt);
    }
  }

  function questionSeven() {
    var q7Answer = ['pasta', 'sushi', 'cake', 'dumplings', 'Tacos'];
    // var question7 = prompt('What is my favorite foods?');
    var correctA = false;
    for (var i = 0; i < 6; i++) {
      var question7 = prompt('What is my favorite foods?');
      console.log(question7);
      for (var j = 0; j < q7Answer.length; j++) {
        if (q7Answer[j] === question7) {
          alert('Congrats you somehow guessed correctly!');
          pointsEarned++;
          console.log(pointsEarned);
          alert(pointsEarned);
          correctA = true;
          break;
        }
      }
      if (!correctA) {
        alert('Sorry, try again');
      } else {
        break;
      }
    }
  }

  beginQuiz();

});
//Starting to try to make a multidimensional array- not sure how good this will be.
//function aboutMarie() {
 // var question = [" Well hello there, I'm Marie, what's your name?","Have I ever lived in the Carribean?",'Am I originally from Ohio?', 'Am I married?', 'In my past career I was a Chef?']
  //     var bermuda = prompt("Have I ever lived in the Carribean?");
  //     console.log('Have I ever lived in Carribean: ' + bermuda);
  //     alert('Bermuda is not in the Carribean, its across from the Carolinas.');
  //   }
