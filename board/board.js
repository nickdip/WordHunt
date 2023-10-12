`TODO: displayNewColours() - should no longer print the board,
    instead, it should change colours only
    a new function should then reset the colours back to white
    this will allow for unit testing`

const chalk = require("chalk")
const { valid } = require("semver")



class Board {

    constructor(dimension) {
        this.board = this.newBoard(dimension)
        this.boardLetters = this.board.map( (arr) => arr.map( (position) => position.letter))
    }

    newBoard(dimension) {
        let board = []
        let array = ["C", "O", "E", "I", "K", "M", "S", "T", "O"] //test
        for (let i = 0; i < dimension; i++) {
            let temp =[]
            for (let j = 0; j < dimension; j++) {
                temp.push(new Position(array.shift(), i, j))
            }
            board.push(temp)
        }
        return board
    }

    displayBoard() {
        for (let i = 0; i < this.board.length; i++) {
            let row = " | "
            for (let j = 0; j < this.board[0].length; j++) {
                let currentLetter = this.board[i][j].letter
                row += `${this.board[i][j].print(currentLetter)} | `
            }
            console.log(row)
        }
    }

    displayNewColours(ijIndex, validEnglishWord) {

        const change = (newColour) => {
            for (let i = 0; i < ijIndex.length; i++) {
                    let [ iIndex, jIndex ] = [ ijIndex[i][0], ijIndex[i][1] ]
                    this.board[iIndex][jIndex].colour = newColour
                }
        }

        const revertBack = () => {
            for (let i = 0; i < ijIndex.length; i++) {
                let [ iIndex, jIndex ] = [ ijIndex[i][0], ijIndex[i][1] ]
                this.board[iIndex][jIndex].colour = "white"
            }
        }

        let newColour = "red"
        if (validEnglishWord) newColour = "green"

        change(newColour)
        this.displayBoard()
        revertBack()
    }

}

class Position {
    constructor(letter, iIndex, jIndex) {
        this.ijIndex = [iIndex, jIndex]
        this.letter = letter
        this.colour = "white"
    }

    print(letter) {
        if (this.colour === "white") return chalk.white(letter)
        if (this.colour === "green") return chalk.green(letter)
        if (this.colour === "red") return chalk.red(letter)
    }

}
    
module.exports = { Board, Position }