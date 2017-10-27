$(document).ready(function() {
  //
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
    var alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
    // creates 26 divs containing the letters in the array above.
    for (var i = 0; i < alphabet.length; i++) {
      console.log('letterContainer')
      $('.letterSetContainer').append(
        `<button class="letter" data-letter="${alphabet[
          i
        ]}"><span class="innerLetter">` +
          alphabet[i] +
          `</span></button>`
      )
    }

    // gives the divs "clickability" and tells you what button you are clicking on. Will also return true or false if the letter is in "chosenWord"
    $('.letter').one('click', e => {
      let letter = $(e.target).data('letter')
      console.log($(this))
      $(e.target).attr('disabled', 'disabled')
      $(e.target).css('background-color', 'red')
      this.checkLetter(letter)
    })
  }

  // this function compares the letter and if they are true... and if they are false they...
  checkLetter(letter) {
    let compareLetter = chosenWord.includes(letter)
    console.log('Chosen letter: ' + letter)
    if (compareLetter === true) {
      var numCorrectLetters = $('.spaceLetter[data-letter="' + letter + '"]')
        .length
      this.correctLetters += numCorrectLetters

      if (this.correctLetters === chosenWord.length) {
        setTimeout(function() {
          alert('You won!')
        }, 300)
        setTimeout(function() {
          location.reload()
        }, 2000)
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
      setTimeout(function() {
        alert('You lost')
      }, 500)
      setTimeout(function() {
        location.reload()
      }, 500)
    } else {
    }
  }

  gameReset() {
    location.reload()
  }
}
