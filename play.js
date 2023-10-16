const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const { readDictionary } = require("./words/createdics")
const { findWord } = require('./words/findWord')
const { Board } = require('./board/board');
const { generateWordsFn } = require("./words/generateWords")

class play {

    constructor(dictionary, dimension = 3) {
        this.dimension = dimension
        this.dictionary = dictionary
        this.board = new Board(this.dimension)
        this.boardArray = this.board.boardLetters
        this.findWord = new findWord(this.boardArray, dictionary)
        this.possibleWords = generateWordsFn(this.findWord)
    }


    async newGame() {

        const askQuestions = () => {
            rl.question('Word: ', (word) => {
                if (word === "\\q") {
                    rl.close()
                    return false //does not work
                }
                word = word.toUpperCase()

                if (word.length < 3) {
                    console.log("Words must be at least 3 letters long")
                    return askQuestions()
                }
                if (word.length > this.dimension ** 2) {
                    console.log("Words should not exceed the number of letters on the board")
                    return askQuestions()
                }
                const wordsWithEqualLength = this.possibleWords[word.length]
                if (word in wordsWithEqualLength) {
                    this.board.displayNewColours(wordsWithEqualLength[word], true)
                    console.log("Your word is valid!")
                    return askQuestions()
                }
                
            
                if (this.findWord.searchBoard(word)) {
                        console.log("Your word is not valid")
                        this.board.displayNewColours(this.findWord.ijRecord, false)
                        return askQuestions()
                    }
                    
                else console.log("Your word is not on the board")
                this.board.displayBoard()

                return askQuestions()

                })}

        setTimeout(() => {
        let arr = []
        for (let wordLength in this.possibleWords) {
            arr = arr.concat(Object.keys(this.possibleWords[wordLength]))
        }
        rl.close()
        }, 30000)
        this.board.displayBoard()
        askQuestions()

    }


}

async function test() {
    let dictionary = await readDictionary()
    new play(dictionary, 4).newGame()
}

test()