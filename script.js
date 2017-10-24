// $(document).ready(function() {
//   console.log("hello world");
// });

var listOfWords = ["potato", "raindeer", "chair", "painting", "couch", "pants"];

class Game {
  constructor() {
    this.answer = "";
  }
  generateWord() {
    var randomNumber = Math.floor(Math.random() * listOfWords.length);
    var chosenWord = listOfWords[randomNumber];
    this.answer = chosenWord;
  }

  generateGameBoard() {
    var numberOfSpaces = this.answer.length;
    console.log(numberOfSpaces);
  }
}

// function compareWord(string, userInputLetter) {
//   console.log(string);
// }
// compareWord(letterInput);

//step 1 need a function to generate answerWord function. = have it return a random word
//step 2 a check letter function that checks the letter vs the answerWord
//step 3 a check lettter function that we will put on each letter
// create board function

var newGame = new Game();

newGame.generateWord();
console.log(newGame.answer);

newGame.generateGameBoard();
