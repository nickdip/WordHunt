

const  { letterFrequencies } = require("../words/utils")


class generateBoard {

    constructor() {
        this.words = []
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
        //default
        return 'a';
      }
         


}



module.exports = { generateBoard }