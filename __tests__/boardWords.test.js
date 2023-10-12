const { generateBoard } = require('../board/generateBoard')
const { readDictionary } = require("../words/createdics")
const { mockRandom } = require('jest-mock-random')

let dictionary
beforeAll( async () => {
    dictionary = await readDictionary()
    return dictionary
    }
)

describe("generateBoard", () => {

    describe("constructors", () => {
        test("dimension constructor is set", () => {
            let board = new generateBoard(3, dictionary)
            expect(board.dimension).toEqual(3)
        })

        test("board constructor is set", () => {
            let board = new generateBoard(3, dictionary)
            expect(board.board).toEqual([["","",""],["","",""],["","",""]])
        })

        test("dictionary constructor is set", () => {
            let board = new generateBoard(3, dictionary)
            expect(board.dictionary).toEqual(dictionary)
        })
    })

    describe("generateLetter", () => {

        test("returns a letter", () => {
            let board = new generateBoard(3, dictionary)
            expect(board.generateLetter()).toMatch(/[A-Z]/)
        })

        test("returns letters with randomness", () => {
            let board = new generateBoard(3, dictionary)
            mockRandom(0.5)
            expect(board.generateLetter()).toEqual("L")
            mockRandom(0.1)
            expect(board.generateLetter()).toEqual("C")
        })
    })

    describe("generateWord", () => {

        test("returns a word", () => {
            let board = new generateBoard(3, dictionary)
            expect(board.generateWord(3)).toMatch(/[A-Z]{3}/)
        })

        test("returns a word with randomness", () => {
            let board = new generateBoard(3, dictionary)
            mockRandom(0.5)
            expect(board.generateWord(3)).toEqual("LOP")
            mockRandom(0.1)
            expect(board.generateWord(3)).toEqual("CEE")
    })
    })

})