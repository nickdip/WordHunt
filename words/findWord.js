//TODO: we want to bring back searchBoard, we want to provide a different error to the person if there link is found but it's not a valid word#
//TODO: Reflext on which variables are defined in the constructor and private
//consider going back to checking if it's valid after 

const { readDictionary } = require("./createdics")
const { checkWord } = require("./searchDictionary")

const readDictFun = async () => { 
    const wordsDict = await readDictionary() 
    const board = [["C", "A", "T"], ["D", "E", "F"], ["G", "H", "I"]]
    const testFindWord = new findWord(board,  wordsDict)
    const testGenerate = testFindWord.generateWords()
}

class findWord {
    constructor(board, wordsDict) {
        this.board = board
        this.wordsDict = wordsDict
        this.ijRecord = []
    }

    searchBoard(word) {

        const visited = []
        let remainingWord = word
        let wordTrack = ""
        this.ijRecord = []

        if (!word) return false

        const searching = (i, j) => {

            if (wordTrack === word) return true
            

            let ijCurrent = `${i}${j}`

            if (i < 0 || i >= this.board.length || j < 0 || j >= this.board[0].length || visited.includes(ijCurrent)){
                return false
            }

            visited.push(ijCurrent)
            const currentLetter = remainingWord[0]

            if (this.board[i][j] != currentLetter) {
                visited.pop()
                return false 
            }

            remainingWord = remainingWord.slice(1)
            wordTrack += currentLetter
            this.ijRecord.push([i, j])

            for (let const1 = -1; const1 <= 1; const1++) {
                for (let const2 = -1; const2 <= 1; const2++) {
                    if (!(const1 == 0 && const2 == 0) && searching(i + const1, j + const2)) return true
                }
            }

            visited.pop()
            this.ijRecord.pop()
            wordTrack = wordTrack.slice(0, -1)
            remainingWord = currentLetter + remainingWord
            
        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (searching(i, j)) return true

        }}

    return false
    }


    check(word) {
        if (word.length < 3) {
            console.log("Words must be at least 3 characters")
            return -1
        }
        if (word.length > 9) {
            console.log("Your word is too long! You can only use each letter once.")
            return -1
        }
        if (!this.searchBoard(word)) {
            console.log("Your word does not exist on the board")
            return -1
        }

        if (!checkWord(word, wordsDict)) {
            console.log("Your word is not a valid English word")

            return 0
        }

        
        console.log(`${word} added!`)
        return 1
        }
    

    generateWords() {

        const searchWords = (iIndex, jIndex, currentWord) => {

            let ijCurrent = `${iIndex}${jIndex}`

            if (iIndex < 0 || iIndex >= this.board.length || jIndex < 0 || jIndex >= this.board[0].length || visited.includes(ijCurrent)){
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

            visited.push(ijCurrent)

            for (let const1 = -1; const1 <= 1; const1++) {
                for (let const2 = -1; const2 <= 1; const2++) {
                    if (!(const1 == 0 && const2 == 0)) {
                        searchWords(iIndex + const1, jIndex + const2, currentWord)
                    }
                }
            }

            visited.pop()
            ijIndex.pop()
            currentWord = currentWord.slice(0, -1)


        }

        let visited = []

        const dimension = this.board.length * this.board[0].length

        let [ possibleWords, ijIndex, obj, wordLength ] = [ {}, [], null, null ]

        for (let l = 3; l <= dimension; l++) {
            obj = {}
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board[0].length; j++) {
                    
                    wordLength = l
                    searchWords(i, j, "")
                    possibleWords[wordLength] = obj
                    visited = []
                    ijIndex = []


            }}
        }

        return possibleWords
    }

}

module.exports = { findWord } 


// readDictFun()