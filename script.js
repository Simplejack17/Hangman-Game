$(document).ready(function() {
  //
  var newGame = new Game(); //creates a new instance of a game
  newGame.generateWord(); //generates a random word from our listOfWords array.
  console.log(newGame.answer); //calls a new instance of our game with the generateWord in it
  newGame.generateGameBoard(); //this is the empty squares that refer to the number of letters in this.answer
  newGame.generateLetters(); // calls out make generateLetters function to create buttons
});

//random awnswer words
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
//so i can compare letters.
var chosenWord;
//creates a new instance of a game
class Game {
  constructor() {
    this.answer = "";
    this.currentGuess = "";
  }
  //picking a random word out of the listOfWords
  generateWord() {
    var randomNumber = Math.floor(Math.random() * listOfWords.length);
    chosenWord = listOfWords[randomNumber];
    this.answer = chosenWord;
  }
  //this is the empty squares that refer to the number of letters in this.answer
  generateGameBoard() {
    var numberOfSpaces = this.answer.length;
    console.log(numberOfSpaces);
    //counting how many letters there are in this.answer and creating that many 'spaces'
    for (var i = 0; i < numberOfSpaces; i++) {
      console.log("number of _ is working");
      $(".gameboard").append(
        '<span class="space">' + this.answer[i] + "</span>"
      );
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
    //gives the divs "clickability" and tells you what button you are clicking on. Will also return true or false if the letter is in "chosenWord"
    $(".letterSetContainer").click(function(e) {
      let letter = $(e.target).data("letter");
      // console.log();
      console.log(chosenWord.includes(letter));
    });
  }
}
//now that when i click on a letter it will return true or false,
//we need to set the letters to .hide? and when we click the letter,
// it will .show

// frame1 = function() {
//   draw(0, 150, 150, 150);
// };
//
// frame2 = function() {
//   draw(10, 0, 10, 600);
// };
//
// frame3 = function() {
//   draw(0, 5, 70, 5);
// };
//
// frame4 = function() {
//   draw(60, 5, 60, 15);
// };
//
// torso = function() {
//   draw(60, 36, 60, 70);
// };
//
// rightArm = function() {
//   draw(60, 46, 100, 50);
// };
//
// leftArm = function() {
//   draw(60, 46, 20, 50);
// };
//
// rightLeg = function() {
//   draw(60, 70, 100, 100);
// };
//
// leftLeg = function() {
//   draw(60, 70, 20, 100);
// };

//want the function to set this.letter to currentGuess.
