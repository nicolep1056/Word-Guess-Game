var gameWon;
var wordsToPick = ["cartman", "kyle", "stan", "kenny", "chef", "towlie", "jimmy", "timmy", "colorado", "authoritah"];
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndLetters = [];
var alreadyGuessed = [];

var numWins = 0;
var numLosses = 0;
var numGuesses = 12;

var kennyBall = ["assets/images/kenny_1.jpg", "assets/images/kenny_2.jpg", "assets/images/kenny_3.jpg"];
var counter = 0

function startGame() {
    gameWon=false;
    numGuesses = 12;
    chosenWord = wordsToPick[Math.floor(Math.random() * wordsToPick.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;
    blanksAndLetters = [];
    alreadyGuessed = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }
    document.querySelector("#guesses-remaining").innerHTML = numGuesses;
    document.querySelector("#wrong-guesses").innerHTML = alreadyGuessed;
    document.querySelector(".kenny").innerHTML =  `<img src="assets/images/kenny_1.jpg" alt="Kenny 1">`

}

console.log(startGame);

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {

        for (var j = 0; j < numBlanks; j++) {

            if (chosenWord[j] === letter) {
                blanksAndLetters[j] = letter;
            }
        }
        console.log(blanksAndLetters);
    }
    else {
        alreadyGuessed.push(letter);
        numGuesses--;
        document.querySelector(".kenny").innerHTML = '<img src="' + kennyBall[counter] + '" alt="kenny">';
        counter++;
        if (counter === 3) {
            counter = 0;
        }
    }
}
function wordGuessed() {

    console.log("WinCount: " + numWins + " | LossCount: " + numLosses + " | NumGuesses: " + numGuesses);
  
    document.querySelector("#guesses-remaining").innerHTML = numGuesses;
    document.querySelector("#word-blanks").innerHTML = blanksAndLetters.join(" ");
    document.querySelector("#already-guessed").innerHTML = alreadyGuessed.join(" ");
  
    if (lettersInWord.toString() === blanksAndLetters.toString()) {
      numWins++;
      gameWon = true;
      document.querySelector("#win-counter").innerHTML = numWins;
    }
  
    else if (numGuesses === 0) {
      numLosses++;
        document.querySelector(".kenny").innerHTML =  `<img src="assets/images/kenny_dead.jpg" alt="Kenny dead">`;
        alert ("you lose.");
  
      document.querySelector("#loss-counter").innerHTML = numLosses;
    }
  
  }
  
startGame();


document.onkeyup = function(event) {
    if (numGuesses === 0 || gameWon) {
        startGame();
    }
    else
    {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 
  checkLetters(letterGuessed);
  wordGuessed();}
  //else if... //if letterGuessed is an element of alphabet array 
  //then run checkLetters
  //else alert user please press letter
};
