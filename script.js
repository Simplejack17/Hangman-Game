$(document).ready(function() {
  var newGame = new Game();
  newGame.generateWord();
  console.log(newGame.answer);
  newGame.generateGameBoard();
  newGame.generateLetters();
});

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

    for (var i = 0; i < numberOfSpaces; i++) {
      console.log("firing");
      $(".gameboard").append('<div class="space">' + this.answer[i] + "</div>");
    }
  }
  generateLetters() {
    var alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    for (var i = 0; i < alphabet.length; i++) {
      console.log("firing");
      $(".letterContainer").append(
        '<div class="letter">' + alphabet[i] + "</div>"
      );
    }
  }
}

//step 1 need a function to generate answerWord function. = have it return a random word
//step 2 a check letter function that checks the letter vs the answerWord
//step 3 a check lettter function that we will put on each letter
// create board function
