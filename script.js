$(document).ready(function() {
  var newGame = new Game() // creates a new instance of a game
  newGame.generateWord() // generates a random word from our listOfWords array.
  console.log(newGame.answer) // calls a new instance of our game with the generateWord in it
  newGame.generateGameBoard() // this is the empty squares that refer to the number of letters in this.answer
  newGame.generateLetters() // calls out make generateLetters function to create buttons
})

//random awnswer words
var listOfWords = [
  'potato',
  'nature',
  'halloween',
  'mountain',
  'couch',
  'pants',
  'turtle',
  'football',
  'green',
  'website',
  'apple',
  'google',
  'yellow'
]
// so i can compare letters.
var chosenWord
// creates a new instance of a game

// Consider moving the entire class Game definition to a separate file `game.js` and
// loading it in with its own script tag to make your code more modular

// Also, since you are taking an object-oriented approach with the data and functionality
// of your game, you should include the `chosenWord` and `listOfWords` data as properties of
// the Game of object as well, just like `this.answer` and `this.turnsRemaining`.

// You could even have `Game`'s constructor take in an argument for `listOfWords` so
// that a new Game can be created with different lists:

// constructor(wordList) {
//   this.wordList = wordList
//   this.chosenWord = ''
//   this.answer = ''
//   this.turnsRemaining = 7
//   this.correctLetters = 0
//   this.gameStatus = 'In progress'
//   // Should gameStatus be a boolean instead? Is it user-facing?
// }




class Game {
  constructor() {
    this.answer = ''
    this.turnsRemaining = 7
    this.correctLetters = 0
    this.gameStatus = 'In progress'
  }
  // picking a random word out of the listOfWords
  generateWord() {
    var randomNumber = Math.floor(Math.random() * listOfWords.length)
    chosenWord = listOfWords[randomNumber]
    // Once you move the above data into the class as attributes, refactor like so:
    // this.chosenWord = this.wordList[randomNumber]
    this.answer = chosenWord
  }
  // this is the empty squares that refer to the number of letters in this.answer
  generateGameBoard() {
    var numberOfSpaces = this.answer.length
    console.log(numberOfSpaces)
    // counting how many letters there are in this.answer and creating that many 'spaces'
    for (var i = 0; i < numberOfSpaces; i++) {
      console.log('number of _ is working')
      $('.gameboard').append(
        '<span class="space"><span class="spaceLetter" data-letter="' +
          this.answer[i] +
          '">' +
          this.answer[i] +
          '</span></span>'
      )
    }
    $('.spaceLetter').addClass('hidden')
  }
  // puts the divs on the webpage and labeled
  generateLetters() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // creates 26 divs containing the letters in the array above.
    // You could use `alphabet.forEach` here instead of doing a `for` loop
    for (var i = 0; i < alphabet.length; i++) {
      console.log('letterContainer')
      $('.letterSetContainer').append(
        `<button class="letter" data-letter="${alphabet[i]}">
              ${alphabet[i]}
          </button>`
      )
      // Here I would just stick to using ES6 interpolation throughout instead of bringing
      // in the + operator for concactenation. Additionally, you do not need the `span`
      // element inside of those buttons as it (combined with selecting the element with `e.target` below)
      // is causing the problem you were having of letters turning red but not the button.
    }

    // gives the divs "clickability" and tells you what button you are clicking on. Will also return true or false if the letter is in "chosenWord"
    $('.letter').on('click', e => {
      let letter = $(e.target).data('letter')
      console.log($(this))
      $(e.target).attr('disabled', 'disabled')
      $(e.target).css('background-color', 'red')
      this.checkLetter(letter)
    })
    // Good job using an arrow function to preserve context of `this` while using e.target
    // to still access DOM element
  }

  // this function compares the letter and if they are true... and if they are false they...
  checkLetter(letter) {
    let compareLetter = chosenWord.includes(letter)
    console.log('Chosen letter: ' + letter)
    if (compareLetter === true) {
      var numCorrectLetters = $('.spaceLetter[data-letter="' + letter + '"]').length
      // Notice that you are reading data from the DOM here when you don't need to
      // To find out how many letters they got correct, you can use `.match` and
      //  a RegExp object to search the string:

      // let compareLetter = new RegExp(letter, g)
      // let matchedLetters = chosenWord.match(compareLetter)
      // let numCorrectLetters = matchedLetters.length

      this.correctLetters += numCorrectLetters

      if (this.correctLetters === chosenWord.length) {
        // Put all of the code inside this conditional into its own method that is
        // called here. Something like `endOfGame()`.
        setTimeout(function() {
          alert('You won!')
        }, 300)
        setTimeout(function() {
          location.reload()
        }, 2000)
        //
      }
      $('*[data-letter="' + letter + '"]').removeClass('hidden')
    } else {
      this.turnsRemaining -= 1
      console.log('Turns Remaining:' + this.turnsRemaining)
      this.drawBodyPart()
    }
  }
  // draw a body part for every -1 turn remaining.
  drawBodyPart() {
    When you are dealing with a bunch of conditionals that are testing the value of
    something, it is an ideal time to use a `switch` statement:
    // switch(this.turnsRemaining) {
    //   case 6:
    //     $('#head').removeClass('hidden')
    //     break;
    //   case 5:
    //     $('#body').removeClass('hidden')
    //     break;
    //   ...etc.
    //   default:
    //     console.error('cannot draw body part')
    //     break;
    // }

    if (this.turnsRemaining === 6) {
      $('#head').removeClass('hidden')
    } else if (this.turnsRemaining === 5) {
      $('#body').removeClass('hidden')
    } else if (this.turnsRemaining === 4) {
      $('#rightArm').removeClass('hidden')
    } else if (this.turnsRemaining === 3) {
      $('#leftArm').removeClass('hidden')
    } else if (this.turnsRemaining === 2) {
      $('#rightLeg').removeClass('hidden')
    } else if (this.turnsRemaining === 1) {
      $('#leftLeg').removeClass('hidden')
      // You could reuse `endOfGame()` here as well if they lose
      setTimeout(function() {
        alert('You lost')
      }, 500)
      setTimeout(function() {
        location.reload()
      }, 500)
    } else {
      // Perhaps add a `console.alert` in this fallback conditional as it won't ever fire
      // unless there is a bug
    }
  }

  gameReset() {
    location.reload()
    // Think about how you might go about resetting the game without having to refresh the page
  }
}


// - Overall, I think your code organization is solid but could be improved in small
// ways by the suggestions I made above. I particularly like how you used OOJS to organize
// your code. If you wanted to take a more advanced OOJS approach, think about how you might
// break up `Game` into multiple, smaller classes that control each entity in your game. Things like:
//   - LetterDisplay
//   - HangmanDisplay
//   - LetterInput
//
// Great work!
