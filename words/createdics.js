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
        // writeFiles(wordsDict)
        return wordsDict 
      }
  
    catch (error) {
      throw error;
    }

  }



// async function writeFiles(wordsDict) {
    
//     let alpha = [
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//       ]
//     Promise.all(alpha.map( (letter) => fs.mkdir(`${letter}`, { recursive: true })))
//     .then( () => {
//     for (let key in wordsDict) {
//         for (let word of wordsDict[key]) {
//             fs.appendFile(`${key[0]}/${key}.txt`, word + "\n")
//         }
//     }})
// }


module.exports = { readDictionary }

