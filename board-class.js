//TO DO: Re-evaluate scrabble dictionary
//Continue testing generateWords method
//create class to generate a new board 

const { readDictionary } = require("./words/createdics")
const { checkWord } = require("./findWords")

const readDictFun = async () => { 
    const wordsDict = await readDictionary() 
    const board = [["C", "A", "T"], ["D", "E", "F"], ["G", "H", "I"]]
    const testFindWord = new findWord(board,  wordsDict)
    const testGenerate = testFindWord.generateWords()
    console.log(testGenerate)
    // console.log(testGenerate)
    // console.log(testGenerate['3'])
}

class findWord {
    #visited
    constructor(board, wordsDict) {
        this.board = board
        this.#visited = []  //keeps track of visited spaces
        this.wordsDict = wordsDict
        this.ijIndex = []
    }

    generateWords() {

        const searchWords = (iIndex, jIndex, currentWord) => {

            let ijCurrent = `${iIndex}${jIndex}`

            if (iIndex < 0 || iIndex >= this.board.length || jIndex < 0 || jIndex >= this.board[0].length || this.#visited.includes(ijCurrent)){
                return
            }

            ijIndex.push([iIndex, jIndex])

            currentWord += this.board[iIndex][jIndex]

            if (currentWord.length === wordLength) {
                const isEnglishWord = checkWord(currentWord, this.wordsDict)
                if (isEnglishWord) obj[currentWord] = ijIndex
                currentWord = currentWord.slice(0, -1)
                ijIndex.pop()
                return
            }

            this.#visited.push(ijCurrent)

            for (let const1 = -1; const1 <= 1; const1++) {
                for (let const2 = -1; const2 <= 1; const2++) {
                    if (!(const1 == 0 && const2 == 0)) {
                        searchWords(iIndex + const1, jIndex + const2, currentWord)
                    }
                }
            }

            this.#visited.pop()
            this.ijIndex.pop()
            currentWord = currentWord.slice(0, -1)


        }

        const dimension = this.board.length * this.board[0].length

        let [ possibleWords, ijIndex, obj, wordLength ] = [ {}, [], null, null ]

        for (let l = 2; l <= dimension; l++) {
            obj = {}
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board[0].length; j++) {
                    
                    wordLength = l
                    searchWords(i, j, "")
                    possibleWords[wordLength] = obj
                    this.#visited = []
                    ijIndex = []


            }}
        }

        return possibleWords
    }

}

module.exports = { findWord } 


// readDictFun()