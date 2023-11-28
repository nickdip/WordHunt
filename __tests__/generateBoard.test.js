const { generateBoard } = require("../board/generateBoard")
const { readDictionary } = require("../words/createdics")

let dictionary
beforeAll( async () => {
    dictionary = await readDictionary()
    return dictionary
    }
)



describe("generateBoard", () => {
    describe("constructor", () => {
        test("should have a dimension property", () => {
            const testBoard = new generateBoard(3, dictionary)
            expect(testBoard.dimension).toEqual(3)
        })

        test("should have a dictionary property", () => {
            const testBoard = new generateBoard(3, dictionary)
            expect(testBoard.dictionary).toEqual(dictionary)
        })

        test("words property should be an empty array", () => {
            const testBoard = new generateBoard(3, dictionary)
            expect(testBoard.words).toEqual([])
        })

    })

    describe("generateLetter", () => {
        test("should return a letter", () => {
            const testBoard = new generateBoard(3, dictionary)
            expect(testBoard.generateLetter()).toMatch(/[A-Z]/)
        })

        test("should return a letter with randomness", () => { 
            const testBoard = new generateBoard(3, dictionary)
            jest.spyOn(global.Math, 'random').mockReturnValue(0.5)
            expect(testBoard.generateLetter()).toEqual("L")
            jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
            expect(testBoard.generateLetter()).toEqual("C")
        })

    })

})