

const { readDictionary } = require("./words/createdics")

function checkWord(possibleWord) {
    return readDictionary().then( (dictionaryObj) => {
        if (possibleWord[possibleWord.slice(0,2)]) return binarySearch(dictionaryObj[possibleWord.slice(0,2)], possibleWord)
        return false
    })

    
}


function binarySearch(words, possibleWord) {
    let left = 0;
    let right = words.length - 1;
    let mid;
    while (right >= left) {
         mid = left + Math.floor((right - left) / 2);

        if (words[mid] == possibleWord) {
            return true
        }
        if (words[mid] > possibleWord) right = mid - 1;
            
        else left = mid + 1;
    }
    return false 
}

checkWord("BBYKA").then( (res) => console.log(res) )