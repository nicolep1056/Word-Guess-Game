var wordsToPick = ["frog", "rabbit", "sheep", "snake"];
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndLetters = [];
var alreadyGuessed = [];

var numWins = 0;
var numLosses = 0;
var numGuesses = 12;

function startGame() {
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
    }
}
function wordGuessed() {

    console.log("WinCount: " + numWins + " | LossCount: " + numLosses + " | NumGuesses: " + numGuesses);
  
    document.querySelector("#guesses-remaining").innerHTML = numGuesses;
    document.querySelector("#word-blanks").innerHTML = blanksAndLetters.join(" ");
    document.querySelector("#already-guessed").innerHTML = alreadyGuessed.join(" ");
  
    if (lettersInWord.toString() === blanksAndLetters.toString()) {
      numWins++;
      alert("You won!");
  
      document.querySelector("#win-counter").innerHTML = numWins;
      startGame();
    }
  
    else if (numGuesses === 0) {
      numLosses++;
      alert("You lose");
  
      document.querySelector("#loss-counter").innerHTML = numLosses;
      startGame();
    }
  
  }
  
startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  wordGuessed();
};
