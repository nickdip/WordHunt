const { findWord } = require("../board-class")


//does not manipulate board
//returns false when there are no matches
//recursion checks every possibility
//returns true with a match in a straight-line
//returns true for match in a non-straight line
//returns true when when the board finds 'near misses' on the board


describe("findWord", () => {

    test("findWord is an object", () => {
        const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
        const testWord = "CAT"
        expect(typeof new findWord(board, testWord)).toBe("object")
        
    })

    describe("constructors", () => {
        test("non-private constructors are defined as expected", () => {
            testfindWord = new findWord("testboard", "word")
            expect(testfindWord.word).toBe("word")
            expect(testfindWord.board).toBe("testboard")
            expect(testfindWord.ijIndex).toEqual([])
        })
        
    })

    describe("methods", ()  => {

        test("Does not manipulate the board", () => {
            const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
            const boardCopy = board.map( (subarr) => [...subarr])
            const testWord = "DOG"
            const testFindWord = new findWord(board, testWord)
            testFindWord.searchBoard()
            expect(board).toEqual(boardCopy)
            
        })

        test("Returns false when there are no matches", () => {
            const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
            const testWord = "DOG"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(false)
            
        })

        test("Returns true with correct record of indices for horizontal match", () => {
            const board = [["C", "A", "T"], ["D", "E", "F"], ["G", "H", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[0, 0], [0, 1], [0, 2]])
            
        })

        test("Returns true with correct record of indices for horizontal match (middle line)", () => {
            const board = [["D", "M", "P"], ["C", "A", "T"], ["G", "H", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[1, 0], [1, 1], [1, 2]])
        })


        test("Returns true with correct record of indices for a vertical match", () => {
            const board = [["W", "C", "P"], ["C", "A", "L"], ["G", "T", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[0, 1], [1, 1], [2, 1]])
        })

        test("Returns true with correct record of indices for a diagonal match", () => {
            const board = [["C", "X", "P"], ["C", "A", "L"], ["G", "P", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[0, 0], [1, 1], [2, 2]])
        })

        test("Returns true with correct record of indices for a reversed match", () => {
            const board = [["S", "X", "T"], ["R", "P", "A"], ["G", "P", "C"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[2, 2], [1, 2], [0, 2]])
        })


        test("Returns true with correct record of indices for a backtracked search", () => {
            const board = [["C", "A", "L"], ["R", "P", "A"], ["C", "A", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[2, 0], [2, 1], [2, 2]])
        })

        test("Returns true with correct record of indices for a backtracked search and repeating checked letters", () => {
            const board = [["C", "A", "L"], ["R", "C", "T"], ["D", "S", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[0, 0], [0, 1], [1, 2]])
        })

        test("Returns true with correct record of indices for a word that uses every letter on the board", () => {
            const board = [["T", "E", "X"], ["O", "B", "T"], ["O", "K", "S"]]
            const testWord = "TEXTBOOKS"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            expect(testFindWord.ijIndex).toEqual([[0, 0], [0, 1], [0, 2], [1, 2], [1, 1], [1,0], [2,0], [2,1], [2,2]])
        })

        test("Returns true with correct record of indices for a word with lots of repeated letters", () => {
            const board = [["K", "O", "O"], ["O", "O", "B"], ["C", "O", "K"]]
            const testWord = "COOKBOOK"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            console.log(testFindWord.ijIndex)
            expect(testFindWord.ijIndex).toEqual([[2, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0,2], [0,1], [0,0]])
    })

        test("Returns true with correct record of indices for a word with a 4x4 board", () => {
            const board = [["C", "V", "D", "S"], ["F", "O", "E", "Q"], ["P", "X", "D", "K"], ["P", "X", "E", "R"]]
            const testWord = "CODER"
            const testFindWord = new findWord(board, testWord)
            const result = testFindWord.searchBoard()
            expect(result).toBe(true)
            console.log(testFindWord.ijIndex)
            expect(testFindWord.ijIndex).toEqual([[0, 0], [1, 1], [2, 2], [3, 2], [3,3]])
    })
    })
})


