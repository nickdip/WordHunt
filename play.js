const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const { readDictionary } = require("./words/createdics")
const { findWord } = require('./words/findWord')
const Board = require('./board/board')

class play {

    constructor() {
        this.board = new Board(3)
    }


    async newGame() {

        const askQuestions = () => {
            rl.question('Word: ', (word) => {
                if (word === "\\q") {
                    rl.close()
                    return false //does not work
                }
                word = word.toUpperCase()
                let result = find.check(word) //check it's valid word
                if (result >= 0) this.board.displayNewColours(find.ijRecord, result)
                return askQuestions()
        })
    }
        let dictionary = await readDictionary()
        const find = new findWord(this.board.boardLetters, dictionary)
        setTimeout(() => {
        rl.close()
        }, 30000)
        askQuestions()


    }


}

let newGame = new play()
newGame.newGame()