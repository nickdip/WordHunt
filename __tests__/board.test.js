const { findWord } = require("../board-class")
const { readDictionary } = require("../words/createdics")

//does not manipulate board
//returns false when there are no matches
//recursion checks every possibility
//returns true with a match in a straight-line
//returns true for match in a non-straight line
//returns true when when the board finds 'near misses' on the board

let dictionary
beforeAll( async () => {
    dictionary = await readDictionary()
    return dictionary
    }
)


describe("findWord", () => {

    test("findWord is an object", () => {
        const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
        const testWord = "CAT"
        expect(typeof new findWord(board, testWord)).toBe("object")
        
    })

    describe("constructors", () => {
        test("non-private constructors are defined as expected", () => {
            testfindWord = new findWord("testboard", "word")
            expect(testfindWord.board).toBe("testboard")
            expect(testfindWord.ijRecord).toEqual([])
        })
        
    })

    describe("methods", ()  => {

        test("Does not manipulate the board", () => {
            const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
            const boardCopy = board.map( (subarr) => [...subarr])
            const testWord = "DOG"
            const testFindWord = new findWord(board, dictionary)
            testFindWord.searchBoard(testWord)
            expect(board).toEqual(boardCopy)
            
        })

        test("Returns false when there are no matches", () => {
            const board = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
            const testWord = "DOG"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(false)
            
        })

        test("Returns true with correct record of indices for horizontal match", () => {
            const board = [["C", "A", "T"], ["D", "E", "F"], ["G", "H", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[0, 0], [0, 1], [0, 2]])
            
        })

        test("Returns true with correct record of indices for horizontal match (middle line)", () => {
            const board = [["D", "M", "P"], ["C", "A", "T"], ["G", "H", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[1, 0], [1, 1], [1, 2]])
        })


        test("Returns true with correct record of indices for a vertical match", () => {
            const board = [["W", "C", "P"], ["C", "A", "L"], ["G", "T", "I"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[0, 1], [1, 1], [2, 1]])
        })

        test("Returns true with correct record of indices for a diagonal match", () => {
            const board = [["C", "X", "P"], ["C", "A", "L"], ["G", "P", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[0, 0], [1, 1], [2, 2]])
        })

        test("Returns true with correct record of indices for a reversed match", () => {
            const board = [["S", "X", "T"], ["R", "P", "A"], ["G", "P", "C"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[2, 2], [1, 2], [0, 2]])
        })


        test("Returns true with correct record of indices for a backtracked search", () => {
            const board = [["C", "A", "L"], ["R", "P", "A"], ["C", "A", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[2, 0], [2, 1], [2, 2]])
        })

        test("Returns true with correct record of indices for a backtracked search and repeating checked letters", () => {
            const board = [["C", "A", "L"], ["R", "C", "T"], ["D", "S", "T"]]
            const testWord = "CAT"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[0, 0], [0, 1], [1, 2]])
        })

        test("Returns true with correct record of indices for a word that uses every letter on the board", () => {
            const board = [["T", "E", "X"], ["O", "B", "T"], ["O", "K", "S"]]
            const testWord = "TEXTBOOKS"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[0, 0], [0, 1], [0, 2], [1, 2], [1, 1], [1,0], [2,0], [2,1], [2,2]])
        })

        test("Returns true with correct record of indices for a word with lots of repeated letters", () => {
            const board = [["K", "O", "O"], ["O", "O", "B"], ["C", "O", "K"]]
            const testWord = "COOKBOOK"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(result).toBe(true)
            expect(testFindWord.ijRecord).toEqual([[2, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0,2], [0,1], [0,0]])
    })

        test("Returns true with correct record of indices for a word with a 4x4 board", () => {
            const board = [["C", "V", "D", "S"], ["F", "O", "E", "Q"], ["P", "X", "D", "K"], ["P", "X", "E", "R"]]
            const testWord = "CODER"
            const testFindWord = new findWord(board, dictionary)
            const result = testFindWord.searchBoard(testWord)
            expect(testFindWord.ijRecord).toEqual([[0, 0], [1, 1], [2, 2], [3, 2], [3,3]])
    })
    })

    describe("generateWords", () => {
        test("generateWords method exists", () => {
            const board = [["C", "V", "D"], ["F", "O", "E"], ["P", "X", "D"], ["P", "X", "E"]]
            const testFindWord = new findWord(board, dictionary)
            expect(typeof testFindWord.generateWords).toBe("function")
        })

        test("generates no words when given a board with no valid words", () => {
            const board = [["X", "X", "X"], ["X", "X", "X"], ["X", "X", "X"]]
            const testFindWord = new findWord(board, dictionary)
            expect(testFindWord.generateWords()).toEqual({
                '3': {},
                '4': {},
                '5': {},
                '6': {},
                '7': {},
                '8': {},
                '9': {}
              })
        })

        test("generates ono valid word when only one valid two letter word is provied ('XI')", () => {
            const board = [["Q", "X", "I"], ["-", "-", "-"], ["-", "-", "-"]]
            const testFindWord = new findWord(board, dictionary)
            expect(testFindWord.generateWords()).toEqual({
                '3': {},
                '4': {},
                '5': {},
                '6': {},
                '7': {},
                '8': {},
                '9': {}
              })
        })

        test("generates one valid word  when provided with correct indices", () => {
            const board = [["C", "A", "T"], ["A", "A", "A"], ["A", "A", "A"]]
            const testFindWord = new findWord(board, dictionary)
            const helper = testFindWord.generateWords()
            expect(testFindWord.generateWords()).toEqual({
                '3': { CAT: [ [ 0, 0 ], [ 1, 1 ], [ 0, 2 ] ] },
                '4': {},
                '5': {},
                '6': {},
                '7': {},
                '8': {},
                '9': {}
              })
        })

        test("generates valid word including diagonals when provided with correct indices", () => {
            const board = [["C", "O", "E"], ["I", "K", "M"], ["S", "T", "O"]]
            const testFindWord = new findWord(board, dictionary)
            expect(testFindWord.generateWords()).toEqual({
                '3':     {
                    CIS: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
                    OKE: [ [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
                    ICK: [ [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
                    ITS: [ [ 1, 0 ], [ 2, 1 ], [ 2, 0 ] ],
                    KOI: [ [ 1, 1 ], [ 0, 1 ], [ 1, 0 ] ],
                    KIS: [ [ 1, 1 ], [ 1, 0 ], [ 2, 0 ] ],
                    KIT: [ [ 1, 1 ], [ 1, 0 ], [ 2, 1 ] ],
                    MOC: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ] ],
                    MOT: [ [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ],
                    SIC: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ] ],
                    SIT: [ [ 2, 0 ], [ 1, 0 ], [ 2, 1 ] ],
                    SKI: [ [ 2, 0 ], [ 1, 1 ], [ 1, 0 ] ],
                    TIC: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ] ],
                    TIS: [ [ 2, 1 ], [ 1, 0 ], [ 2, 0 ] ],
                    TSK: [ [ 2, 1 ], [ 2, 0 ], [ 1, 1 ] ],
                    TOM: [ [ 2, 1 ], [ 2, 2 ], [ 1, 2 ] ]
                  },
                '4': {
                    COKE: [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 0, 2 ] ],
                    COME: [ [ 0, 0 ], [ 0, 1 ], [ 1, 2 ], [ 0, 2 ] ],
                    CIST: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
                    KOIS: [ [ 1, 1 ], [ 0, 1 ], [ 1, 0 ], [ 2, 0 ] ],
                    KIST: [ [ 1, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
                    KITS: [ [ 1, 1 ], [ 1, 0 ], [ 2, 1 ], [ 2, 0 ] ],
                    MOCK: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ], [ 1, 1 ] ],
                    MOKE: [ [ 1, 2 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
                    MOTS: [ [ 1, 2 ], [ 2, 2 ], [ 2, 1 ], [ 2, 0 ] ],
                    SICK: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
                    SIKE: [ [ 2, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 2 ] ],
                    SKIT: [ [ 2, 0 ], [ 1, 1 ], [ 1, 0 ], [ 2, 1 ] ],
                    TICK: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
                    TIKE: [ [ 2, 1 ], [ 1, 0 ], [ 1, 1 ], [ 0, 2 ] ],
                    TOKE: [ [ 2, 1 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
                    TOME: [ [ 2, 1 ], [ 2, 2 ], [ 1, 2 ], [ 0, 2 ] ],
                    OTIC: [ [ 2, 2 ], [ 2, 1 ], [ 1, 0 ], [ 0, 0 ] ]
                  },
                '5':     {
                    MOCKS: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ], [ 1, 1 ], [ 2, 0 ] ],
                    MOIST: [ [ 1, 2 ], [ 0, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
                    SICKO: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
                    STICK: [ [ 2, 0 ], [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
                    STOKE: [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
                    TICKS: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ], [ 2, 0 ] ]
                   },
                '6': {},
                '7': {},
                '8': {},
                '9': {}
              })
        })
        test("generates valid words and indices with a nine-letter word", async () => {
            const board = [["E", "X", "R"], ["C", "Q", "E"], ["H", "E", "U"]]
            const testFindWord = new findWord(board, dictionary)
            expect(testFindWord.generateWords()).toEqual({
            '3':     {
                REX: [ [ 0, 2 ], [ 1, 2 ], [ 0, 1 ] ],
                REE: [ [ 0, 2 ], [ 1, 2 ], [ 2, 1 ] ],
                CEE: [ [ 1, 0 ], [ 2, 1 ], [ 1, 2 ] ]
            },
            '4':     {
                ECHE: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
                EXEC: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ], [ 1, 0 ] ]
            },
            '5':   {
                CHEER: [ [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 1, 2 ], [ 0, 2 ] ],
                QUEER: [ [ 1, 1 ], [ 2, 2 ], [ 2, 1 ], [ 1, 2 ], [ 0, 2 ] ]
            },
        
            '6':{
                CHEQUE: [ [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 1, 1 ], [ 2, 2 ], [ 1, 2 ] ]
            },
            '7':     {
                CHEQUER: [
                [ 1, 0 ], [ 2, 0 ],
                [ 2, 1 ], [ 1, 1 ],
                [ 2, 2 ], [ 1, 2 ],
                [ 0, 2 ]
                ]
            },
            '8': {},
            '9':     {
                EXCHEQUER: [
                [ 0, 0 ], [ 0, 1 ],
                [ 1, 0 ], [ 2, 0 ],
                [ 2, 1 ], [ 1, 1 ],
                [ 2, 2 ], [ 1, 2 ],
                [ 0, 2 ]
                ]
            }
            })})

        test("generates valid words and indices with a 4 x 4 board", async () => {
            const board = [["H", "J", "A"], ["I", "H", "C"], ["G", "E", "K"]]
            const testFindWord = new findWord(board, dictionary)
            expect(testFindWord.generateWords()).toEqual({
            '3':   {
                HIE: [ [ 1, 1 ], [ 1, 0 ], [ 2, 1 ] ],
                JIG: [ [ 0, 1 ], [ 1, 0 ], [ 2, 0 ] ],
                AHI: [ [ 0, 2 ], [ 1, 1 ], [ 1, 0 ] ],
                ACE: [ [ 0, 2 ], [ 1, 2 ], [ 2, 1 ] ],
                HAJ: [ [ 1, 1 ], [ 0, 2 ], [ 0, 1 ] ],
                CHI: [ [ 1, 2 ], [ 1, 1 ], [ 1, 0 ] ],
                GIE: [ [ 2, 0 ], [ 1, 0 ], [ 2, 1 ] ],
                GHI: [ [ 2, 0 ], [ 1, 1 ], [ 1, 0 ] ],
                KHI: [ [ 2, 2 ], [ 1, 1 ], [ 1, 0 ] ],
                KEG: [ [ 2, 2 ], [ 2, 1 ], [ 2, 0 ] ]
              },
            '4':     {
                HIGH: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 1, 1 ] ],
                JACK: [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ],
                ACHE: [ [ 0, 2 ], [ 1, 2 ], [ 1, 1 ], [ 2, 1 ] ],
                HAJI: [ [ 1, 1 ], [ 0, 2 ], [ 0, 1 ], [ 1, 0 ] ],
                HACK: [ [ 1, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ],
                HECK: [ [ 1, 1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ] ],
                GECK: [ [ 2, 0 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ] ]
              },
            '5':  { HACEK: [ [ 1, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ] },
        
            '6':    {
                HIJACK: [ [ 1, 1 ], [ 1, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ]
              },
            '7': {},
            '8':     {
                HIGHJACK: [
                  [ 0, 0 ], [ 1, 0 ],
                  [ 2, 0 ], [ 1, 1 ],
                  [ 0, 1 ], [ 0, 2 ],
                  [ 1, 2 ], [ 2, 2 ]
                ]
              },
            '9': {}

            })})

    })
    
})

