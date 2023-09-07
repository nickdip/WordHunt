
function findWord(board, word) {

    word = word.toLowerCase() 

    let [ remainingWord, visited ] = [ word, [] ]

    const  wordTrack = { letters: "", ijIndex: [] }

    function searching(i, j) {
        
        if (wordTrack["letters"] == word) return true

        let ijCurrent = `${i}${j}`

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited.includes(ijCurrent)){
            return false
        }
        
        visited.push(ijCurrent)
        
        letter = remainingWord[0] 

        if (board[i][j] != letter) {
            visited = []
            return false 
        }

        //change subword to Object with ij tracke
        remainingWord = remainingWord.slice(1)
        wordTrack["letters"] += letter
        wordTrack["ijIndex"].push([i, j])

        for (let const1 = -1; const1 <= 1; const1++) {
            for (let const2 = -1; const2 <= 1; const2++) {
                if (!(const1 == 0 && const2 == 0) && searching(i + const1, j + const2)) return true
            }
        }


    visited = []
        remainingWord = letter + remainingWord
        wordTrack["letters"] = ""
        
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
             if (searching(i, j)) return wordTrack
        }
    }
    
    
    return false 

};

board = [["C", "T", "L"], ["A", "S", "I"], ["M", "N", "T"]]
console.log(findWord(board, "CAT")["letters"])

module.exports = { findWord }