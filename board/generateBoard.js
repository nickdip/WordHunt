
const { readDictionary } = require("../words/createdics")
const  { letterFrequencies, randomArrayElement, keysStartingWith } = require("../words/utils")
const { boardWords } = require("../board/boardWords")


// `Generate a random letters for the board`


// `
// genereate a function that counts the number of empty strings left on the board
// genereate a word
// if more than 50% of the board is empty, generate a new word

//  `

class generateBoard {

    constructor(dimension, dictionary) {
        this.dimension = dimension
        this.board = this.generateBoard(dimension)
        this.dictionary = dictionary
        this.words = []
    }

    generateBoard(dimension) {
        let board = []
        let temp
        for (let i = 0; i < 3; i++) {
            temp = []
            for (let j = 0; j < 3; j++) {
                temp.push(this.generateLetter())
            }
            board.push(temp)
        }
        
        return board
    }


    generateLetter() {

        const randomValue = Math.random() * 100;
      

        let cumulativeFrequency = 0;
      
        for (const letter in letterFrequencies) {
          cumulativeFrequency += letterFrequencies[letter]
          if (randomValue <= cumulativeFrequency) {
            return letter;
          }
        }
      
        // Default
        return 'a';
      }
         

    // emptyStirngsRatio (board, dimension) {
    //     let count = 0
    //     board.forEach( (row) => {
    //         row.forEach( (letter) => {
    //             if (!letter) count++
    //         })
    //     })
    //     return count / (dimension * dimension)
    
    // }

    // generateWordLength() {
    //     let maxWordLength = this.dimension
    //     return randomWordLength = Math.floor(Math.random() * ( maxWordLength - 3)) + 3
    // }

    // generateWord(length) {

    //     const lettersKeyChecked = []
    //     let firstLetter = this.generateLetter()
    //     let possibleKeys = keysStartingWith(this.dictionary, firstLetter)

    //     const getWord = () => {
    //         let lettersKey = randomArrayElement(possibleKeys)

    //         let possibleWords = this.dictionary[lettersKey]

    //         possibleWords = possibleWords.filter( (word) => word.length === length)

    //         if (!possibleWords.length) {
    //             lettersKeyChecked.push(lettersKey)
    //             possibleKeys = possibleKeys.filter( (key) => !lettersKeyChecked.includes(key))
    //             return getWord()
    //         }
    //         return randomArrayElement(possibleWords)
    //     }
        
    //     return getWord()
    // }

}



module.exports = { generateBoard }