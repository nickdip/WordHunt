
//TO DO: continue  testing for displayNewColours

const { default: expect } = require("expect");
const { Position, Board } = require("../board/board")
const chalk = require('chalk');
const { spyOn } = require("jest-mock");


describe("Position", () => {
    test("Object is defined", () => {
        expect(Position).toBeDefined()
        expect(Position).toBeInstanceOf(Function)
    })
    test("constructor sets the correct values", () => {
        let position = new Position("A", 0, 0)
        expect(position.letter).toEqual("A")
        expect(position.ijIndex).toEqual([0, 0])
        expect(position.colour).toEqual("white")
    })

    test("print returns the correct colour for default colour", () => {
        let position = new Position("A", 0, 0)
        expect(position.print("A")).toEqual(chalk.white("A"))
    })

})

describe("Board", () => {
    test("Object is defined", () => {
        expect(Board).toBeDefined()
        expect(Board).toBeInstanceOf(Function)
    })

    test("constructor sets the correct values", () => {
        let board = new Board(3)
        expect(board.board.length).toEqual(3)
        expect(board.board[0].length).toEqual(3)
        expect(board.board[0][0]).toBeInstanceOf(Position)
        expect(board.boardLetters.length).toEqual(3)
        expect(board.boardLetters[0].length).toEqual(3)
        for (let i = 0; i < board.boardLetters.length; i++) {
            for (let j = 0; j < board.boardLetters[0].length; j++) {
                expect(board.boardLetters[i][j]).toMatch(/\w/)
            }
        }
        expect(board.board[0][0].letter).toMatch(/\w/)
        expect(board.board[0][0].colour).toEqual("white")
    })

    test("displayBoard displays the board", () => {
        let dimension = 3
        let board = new Board(dimension)
        spyOn(console, 'log')
        board.displayBoard()
        expect(console.log).toHaveBeenCalledTimes(dimension)
        
    })

    test("displayNewColours changes the colour of the board when a word is a valid English word", () => {
        let dimension = 3
        let board = new Board(dimension)
        board.displayNewColours([[0,0],[0,1],[0,2]], true)
        expect(console.log).toHaveBeenCalledTimes(dimension)

    })



})