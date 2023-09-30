//TO DO: we want to bring back searchBoard, we want to provide a different error to the person if there link is found but it's not a valid word#
//TO DO: Reflext on which variables are defined in the constructor and private
//consider going back to checking if it's valid after 

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
    #remainingWord
    constructor(board, wordsDict) {
        this.board = board
        this.#visited = []  //keeps track of visited spaces
        this.wordsDict = wordsDict
        this.#remainingWord = ""
        this.ijRecord = []
    }

    searchBoard(word) {

        if (!word) return false

        const searching = (i, j) => {

            if (wordTrack === word) return true
            

            let ijCurrent = `${i}${j}`

            if (i < 0 || i >= this.board.length || j < 0 || j >= this.board[0].length || this.#visited.includes(ijCurrent)){
                return false
            }

            this.#visited.push(ijCurrent)
            const currentLetter = this.#remainingWord[0]

            if (this.board[i][j] != currentLetter) {
                this.#visited.pop()
                return false 
            }

            this.#remainingWord = this.#remainingWord.slice(1)
            wordTrack += currentLetter
            this.ijRecord.push([i, j])

            for (let const1 = -1; const1 <= 1; const1++) {
                for (let const2 = -1; const2 <= 1; const2++) {
                    if (!(const1 == 0 && const2 == 0) && searching(i + const1, j + const2)) return true
                }
            }

            this.#visited.pop()
            this.ijRecord.pop()
            wordTrack = wordTrack.slice(0, -1)
            this.#remainingWord = currentLetter + this.#remainingWord
            
        }

        let wordTrack = ""
        this.#remainingWord = word

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (searching(i, j)) return true

        }}

    return false
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
                if (isEnglishWord){           
                    obj[currentWord] = ijIndex.map( (arr) => [...arr])
                }
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
            ijIndex.pop()
            currentWord = currentWord.slice(0, -1)


        }

        const dimension = this.board.length * this.board[0].length

        let [ possibleWords, ijIndex, obj, wordLength ] = [ {}, [], null, null ]

        for (let l = 3; l <= dimension; l++) {
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