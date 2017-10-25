$(document).ready(function() {
  var newGame = new Game(); //creates a new instance of a game
  newGame.generateWord();
  console.log(newGame.answer);
  newGame.generateGameBoard(); //this is the empty squares that refer to the number of letters in this.answer
  newGame.generateLetters();
});

var listOfWords = [
  "potato",
  "nature",
  "halloween",
  "mountain",
  "couch",
  "pants",
  "turtle",
  "football"
];
//creates a new instance of a game
class Game {
  constructor() {
    this.answer = "";
    this.currentGuess = "";
  }
  //picking a random word out of the listOfWords
  generateWord() {
    var randomNumber = Math.floor(Math.random() * listOfWords.length);
    var chosenWord = listOfWords[randomNumber];
    this.answer = chosenWord;
  }
  //this is the empty squares that refer to the number of letters in this.answer
  generateGameBoard() {
    var numberOfSpaces = this.answer.length;
    console.log(numberOfSpaces);
    //counting how many letters there are in this.answer and creating that many 'spaces'
    for (var i = 0; i < numberOfSpaces; i++) {
      console.log("number of _ is working");
      $(".gameboard").append('<div class="space">' + this.answer[i] + "</div>");
    }
  }
  //puts the divs on the webpage and labeled
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
    //creates 26 divs containing the letters in the array above.
    for (var i = 0; i < alphabet.length; i++) {
      console.log("letterContainer");
      $(".letterSetContainer").append(
        `<span class="letter" data-letter="${alphabet[i]}">` +
          alphabet[i] +
          `</span>`
      );
    }
    //gives the divs "clickability" and
    $(".letterSetContainer").click(function(e) {
      let letter = $(e.target).data("letter");
      console.log(letter);
      // we want to look at the event target to get the current letter
    });
  }
}
//add a click funtiom (event linstern) to each letter div. (on click call this function)
//want the function to set this.letter to currentGuess.
// make another function to make sure the letter thats clicked is in the string
