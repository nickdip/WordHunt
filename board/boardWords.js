

class boardWords {

    generateWord(length) {

        const lettersKeyChecked = []
        let firstLetter = this.generateLetter()
        let possibleKeys = keysStartingWith(this.dictionary, firstLetter)

        const getWord = () => {
            let lettersKey = randomArrayElement(possibleKeys)

            let possibleWords = this.dictionary[lettersKey]

            possibleWords = possibleWords.filter( (word) => word.length === length)

            if (!possibleWords.length) {
                lettersKeyChecked.push(lettersKey)
                possibleKeys = possibleKeys.filter( (key) => !lettersKeyChecked.includes(key))
                return getWord()
            }
            return randomArrayElement(possibleWords)
        }
        
        this.arr.push(getWord())

    }


}

module.exports = { boardWords }