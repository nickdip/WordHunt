`TO CONSIDER HOW TO MAKE THE BOARD EASIER/MORE WORDS`

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const { readDictionary } = require("./words/createdics")
const { findWord } = require('./words/findWord')
const { Board } = require('./board/board')
const { wordScore } = require('./words/utils');
const { read } = require('node:fs');

class play {

    constructor(dictionary) {
        this.firstGame = true
        this.scores = []
        this.highScore = 0
        this.dictionary = dictionary
        this.possibleWords = []
    }


    async newGame() {
        if (this.firstGame) {
            this.instructons()
            this.firstGame = false
        }
        rl.question("Press enter to start  ", () => {
            let board = new Board(3)

            board.displayBoard()
            const find = new findWord(board.boardLetters, this.dictionary)
            this.findPossibleWords(find)

            setTimeout(() => {
            console.log()
            console.log("Time's up!")
            console.log("Possible Words:")
            console.log(this.possibleWords)
            this.showScores()
    
            this.scores = []
            rl.close()
            }, 30000)
            this.playing(find, board)

        })

    }

    playing(find, board) {
        rl.question("Word: ", (word) => {
            if (word === "\\q") {
                rl.close()
                return false //does not work
            }
            word = word.toUpperCase()
            let { validWord, onBoard, message }= find.check(word) //check it's valid word
            if (onBoard) {
                board.displayNewColours(find.ijRecord, validWord)
            }
            if (onBoard && validWord) {
                this.scores.push(wordScore(word))
                console.log(message + this.scores.at(-1))
            }
            else console.log(message)
            return this.playing(find, board)
    })
    }

    playAgain() {
        rl.question("Would you like to play again? ", (answer) => {
            const yes = ["Y", "yes", "y", "Yes"]
            const no = ["N", "no", "n", "No"]
            if (yes.includes(answer)) {
                this.newGame()
            }
            else if (no.includes(answer)) {
                this.showScores()
                rl.close()
            }
            else {
                console.log("Please enter yes or no")
                return this.playAgain()
            }
        })

    }

    findPossibleWords(find) {
        const possibleWordsObj = find.generateWords()
        for (let length in possibleWordsObj) {
            for (let word in possibleWordsObj[length]) {
                this.possibleWords.push(word)
            }
        }
        
    }

    showScores() {
        let total_score = this.scores.reduce((a, b) => a + b, 0)
        console.log("GAME OVER! SCORE: " + total_score)
        if (total_score > this.highScore) {
            this.highScore = total_score
            console.log("NEW HIGH SCORE: " + this.highScore)
        }
        else {
            console.log("HIGH SCORE: " + this.highScore)
        }
    }
    instructons() {
        console.log(`Welcome to WordHunt! 
                You have 60 seconds to find as many words as you can on the board.
                Words must be at least 3 letters long.
                Words must be valid English words (scrabble dictionary).
                Words must be formed from adjacent letters on the board.`)
    }


}

readDictionary().then((dictionary) => {
    let newGame = new play(dictionary)
    newGame.newGame()
})