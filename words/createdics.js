const fs = require('fs/promises')



async function readDictionary() {

    wordsDict = {}

    try {
        let words = []
        const data = await fs.readFile(`${__dirname}/dictionary.txt`, "utf8")
        words = []
        word = ""
        for (let i = 0; i < data.length; i++) {

            if (data[i] != '\n') word += data[i]
            if (data[i] === '\n') {
                let firstTwoLetters = word.slice(0,2)
                words.push(word)
                if (wordsDict[firstTwoLetters]) wordsDict[firstTwoLetters].push(word)
                else wordsDict[firstTwoLetters] = [word]
                word = ""
            }
           

            
        }

        return wordsDict 
      }
  
    catch (error) {
      throw error;
    }

  }




module.exports = { readDictionary }

